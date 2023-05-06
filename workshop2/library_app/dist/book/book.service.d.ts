import { BookEntity } from './entities/book.entity';
import { Repository } from 'typeorm';
import { BookDto } from './dto/book.dto';
import { AuthorEntity } from 'src/author/entities/author.entity';
import { PublisherEntity } from 'src/publisher/entities/publisher.entity';
export declare class BookService {
    private readonly bookRepository;
    private readonly authorRepository;
    private readonly publisherRepository;
    constructor(bookRepository: Repository<BookEntity>, authorRepository: Repository<AuthorEntity>, publisherRepository: Repository<PublisherEntity>);
    getBooks(): Promise<BookEntity[]>;
    insertBook(bookDto: BookDto, authorId: string, publisherId: string): Promise<string>;
}
