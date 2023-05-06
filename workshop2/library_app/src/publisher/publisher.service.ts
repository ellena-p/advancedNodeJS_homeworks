import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PublisherEntity } from './entities/publisher.entity';
import { Repository } from 'typeorm';
import { PublisherController } from './publisher.controller';
import { PublisherDto } from './dto/publisher.dto';
import { Publisher } from 'src/interfaces/publisher.interface';

@Injectable()
export class PublisherService {
    constructor (
        @InjectRepository(PublisherEntity)
        private readonly publisherRepository: Repository<PublisherEntity>
    ){}

    getPublishers(){
        return this.publisherRepository.find({
            relations: ['books'],
        })
    }

    async inserPublisher (publisherDto:PublisherDto){
        const publisher: Publisher={
          ...publisherDto
        }
    
        const publisherInserted = this.publisherRepository.create(publisher);
        const publisherSaved = await this.publisherRepository.save(publisherInserted);
      }


    
}
