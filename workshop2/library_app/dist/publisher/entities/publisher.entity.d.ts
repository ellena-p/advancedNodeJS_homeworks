import { BookEntity } from "src/book/entities/book.entity";
import { Publisher } from "src/interfaces/publisher.interface";
export declare class PublisherEntity implements Publisher {
    id: string;
    name: string;
    address: string;
    phoneNumber: string;
    books: BookEntity[];
}
