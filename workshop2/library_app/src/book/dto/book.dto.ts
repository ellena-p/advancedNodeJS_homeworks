import { IsNotEmpty } from "class-validator";
import { Author } from "src/interfaces/author.interface";
import { Publisher } from "src/interfaces/publisher.interface";

export class BookDto 
{
    id: string;

    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    genre: string;

    @IsNotEmpty()
    author: Author;

    @IsNotEmpty()
    publisher: Publisher;
  }