import { Role } from "src/interfaces/user.interface";

export class UserDto {
    id: number;
    username: string;
    password: string;
    role: Role;
  }
