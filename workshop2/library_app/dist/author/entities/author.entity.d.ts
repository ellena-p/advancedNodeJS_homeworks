import { BookEntity } from "src/book/entities/book.entity";
import { Author } from "src/interfaces/author.interface";
export declare class AuthorEntity implements Author {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    birthDate: Date;
    books: BookEntity[];
}
