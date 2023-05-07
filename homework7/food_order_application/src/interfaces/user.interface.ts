export interface User {
    id: number;
    username: string;
    password: string;
    role: Role;
  }

  export enum Role {
    ADMIN = 'ADMIN',
    COSTUMER = 'COSTUMER'
  }