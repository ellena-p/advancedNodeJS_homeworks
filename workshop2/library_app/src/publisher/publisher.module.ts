import { Module } from '@nestjs/common';
import { PublisherService } from './publisher.service';
import { PublisherController } from './publisher.controller';
import { PublisherEntity } from './entities/publisher.entity';
import { BookEntity } from 'src/book/entities/book.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[ TypeOrmModule.forFeature([PublisherEntity, BookEntity])],
  providers: [PublisherService],
  controllers: [PublisherController]
})
export class PublisherModule {}
