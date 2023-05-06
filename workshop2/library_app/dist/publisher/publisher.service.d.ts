import { PublisherEntity } from './entities/publisher.entity';
import { Repository } from 'typeorm';
import { PublisherDto } from './dto/publisher.dto';
export declare class PublisherService {
    private readonly publisherRepository;
    constructor(publisherRepository: Repository<PublisherEntity>);
    getPublishers(): Promise<PublisherEntity[]>;
    inserPublisher(publisherDto: PublisherDto): Promise<void>;
}
