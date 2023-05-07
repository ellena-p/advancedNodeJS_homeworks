import { Injectable } from '@nestjs/common';
import { User } from '../interfaces/user.interface';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      username: 'nate_pip',
      password: 'nate123',
    },
    {
      id: 2,
      username: 'pete_bip',
      password: 'pete123',
    },
  ];

  async findOne(username: string) {
    const findUser = this.users.find((user) => user.username === username);
    return findUser;
  }
}
