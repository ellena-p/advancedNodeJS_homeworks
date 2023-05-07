import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/interfaces/user.interface';
import { UserDto } from 'src/users/dto/user.dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string) {
    const user = await this.usersService.findOne(username);

    if (!user) {
      throw new NotFoundException(
        `User with username: ${username} was not found.`,
      );
    }

    const passwordCheck = bcrypt.compareSync(password, user.password);

    if (user && passwordCheck) {
      const { password, ...restProp } = user;
      return {
        ...restProp,
      };
    }
    return null;
  }

  async login(user: User) {
    const payload = { username: user.username, id: user.id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register (userDto: UserDto){
    const saveUser = {
      id:userDto.id,
      username:userDto.username,
      password: bcrypt.hashSync(userDto.password,10),
      role: userDto.role

    }

    const id = await this.usersService.registerUser(saveUser)
    return id;
  }
}
