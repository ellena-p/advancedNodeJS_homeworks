import { Module } from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorController } from './author.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorEntity } from './entities/author.entity';
import { BookEntity } from 'src/book/entities/book.entity';

@Module({
  imports:[ TypeOrmModule.forFeature([AuthorEntity, BookEntity])],
  providers: [AuthorService, ],
  controllers: [AuthorController, ]
})
export class AuthorModule {}
