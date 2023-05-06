import { BookService } from './book.service';
import { BookDto } from './dto/book.dto';
export declare class BookController {
    private readonly bookService;
    constructor(bookService: BookService);
    getBooks(): Promise<import("./entities/book.entity").BookEntity[]>;
    insertBook(body: BookDto, authorId: string, publisherId: string): Promise<{
        message: string;
        id: string;
    }>;
}
