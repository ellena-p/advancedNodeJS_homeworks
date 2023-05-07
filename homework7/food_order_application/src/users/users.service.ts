import { Injectable } from '@nestjs/common';
import { Role, User } from '../interfaces/user.interface';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
    ){}

    private users: User[] = [
        {
          id: 1,
          username: 'nate_pip',
          password: 'nate123',
          role: Role.COSTUMER
        
        },
        {
          id: 2,
          username: 'pete_bip',
          password: 'pete123',
          role: Role.COSTUMER
        },
    ];

    async findOne (username:string){
        const findUser= await this.userRepository.findOne({
          where:{username:username}
        });
        return findUser;
    }

    async registerUser (userDto: UserDto){
      const userCreate = this.userRepository.create(userDto);
      const userSave = await this.userRepository.save(userCreate)

      return userSave.id
    }
}
