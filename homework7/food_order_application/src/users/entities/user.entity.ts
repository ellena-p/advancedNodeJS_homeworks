import { Role } from 'src/interfaces/user.interface';
import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('users')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    role: Role;
    
  }

  