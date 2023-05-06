import { Body, Controller, Get, Post } from '@nestjs/common';
import { PublisherService } from './publisher.service';
import { PublisherDto } from './dto/publisher.dto';

@Controller('publisher')
export class PublisherController {
    constructor(private readonly publisherService: PublisherService){}

    @Get()
    getPublishers(){
        const publishers = this.publisherService.getPublishers();

        return publishers;
    }

    @Post()
    async inserPublisher(@Body() body:PublisherDto){
        const author = await this.publisherService.inserPublisher(body)
        return{
            message: `Publisher was inserted`,
        }
    }

}
