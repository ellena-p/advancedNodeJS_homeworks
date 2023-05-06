import { PublisherService } from './publisher.service';
import { PublisherDto } from './dto/publisher.dto';
export declare class PublisherController {
    private readonly publisherService;
    constructor(publisherService: PublisherService);
    getPublishers(): Promise<import("./entities/publisher.entity").PublisherEntity[]>;
    inserPublisher(body: PublisherDto): Promise<{
        message: string;
    }>;
}
