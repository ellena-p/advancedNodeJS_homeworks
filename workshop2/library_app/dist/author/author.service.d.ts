import { AuthorEntity } from './entities/author.entity';
import { Repository } from 'typeorm';
import { AuthorDto } from './dto/author.dto';
export declare class AuthorService {
    private readonly authorRepository;
    constructor(authorRepository: Repository<AuthorEntity>);
    getAuthors(): Promise<AuthorEntity[]>;
    insertAuthor(authorDto: AuthorDto): Promise<void>;
}
