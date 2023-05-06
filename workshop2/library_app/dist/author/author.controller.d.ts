import { AuthorService } from './author.service';
import { AuthorDto } from './dto/author.dto';
export declare class AuthorController {
    private readonly authorService;
    constructor(authorService: AuthorService);
    getAuthors(): Promise<import("./entities/author.entity").AuthorEntity[]>;
    insertAuthor(body: AuthorDto): Promise<{
        message: string;
    }>;
}
