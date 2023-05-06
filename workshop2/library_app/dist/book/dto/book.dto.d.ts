import { Author } from "src/interfaces/author.interface";
import { Publisher } from "src/interfaces/publisher.interface";
export declare class BookDto {
    id: string;
    title: string;
    description: string;
    genre: string;
    author: Author;
    publisher: Publisher;
}
