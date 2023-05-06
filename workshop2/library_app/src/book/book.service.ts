import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookEntity } from './entities/book.entity';
import { Repository } from 'typeorm';
import { BookDto } from './dto/book.dto';
import { Book } from 'src/interfaces/book.interface';
import { AuthorEntity } from 'src/author/entities/author.entity';
import { AuthorDto } from 'src/author/dto/author.dto';
import { PublisherEntity } from 'src/publisher/entities/publisher.entity';

@Injectable()
export class BookService {
    constructor (
        @InjectRepository(BookEntity)
        private readonly bookRepository: Repository<BookEntity>,
        @InjectRepository(AuthorEntity)
        private readonly authorRepository: Repository<AuthorEntity>,
        @InjectRepository(PublisherEntity)
        private readonly publisherRepository: Repository<PublisherEntity>,
    ){}

    getBooks(){
        return this.bookRepository.find({
            relations: ['author', 'publisher'],
        });
        
    }



    async insertBook(bookDto:BookDto,authorId:string, publisherId:string){
        const author = await this.authorRepository.findOneBy({id:authorId});
        const publisher = await this.publisherRepository.findOneBy({id:publisherId});
        
        const book: Book ={
            ...bookDto,
            author: author,
            publisher: publisher

        }

        const bookInserted = this.bookRepository.create(book);
        const bookSaved = await this.bookRepository.save(bookInserted)
        return book.id
    }
}
