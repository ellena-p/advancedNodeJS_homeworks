import { Book } from "src/interfaces/book.interface";
export declare class AuthorDto {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    birthDate: Date;
    books: Book[];
}
