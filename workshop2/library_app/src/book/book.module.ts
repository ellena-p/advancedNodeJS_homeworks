import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { BookEntity } from './entities/book.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorEntity } from 'src/author/entities/author.entity';
import { PublisherEntity } from 'src/publisher/entities/publisher.entity';

@Module({
  imports:[ TypeOrmModule.forFeature([BookEntity, AuthorEntity, PublisherEntity])],
  providers: [BookService],
  controllers: [BookController]
})
export class BookModule {}
