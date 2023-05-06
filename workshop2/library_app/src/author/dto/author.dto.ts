import { IsArray, IsEmail, IsNotEmpty } from "class-validator";
import { Book } from "src/interfaces/book.interface";

export class AuthorDto 
{
    id: string;
    @IsNotEmpty()
    firstName: string;

    @IsNotEmpty()
    lastName: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    birthDate: Date;

    @IsArray()
    books: Book[];
  }