import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorDto } from './dto/author.dto';

interface IdRouteParams {
    id: string;
  }
  
@Controller('author')
export class AuthorController {
    constructor (private readonly authorService: AuthorService){}

    @Get()
    getAuthors(){
        const author = this.authorService.getAuthors();
        
        return author;
    }


    @Post()
    async insertAuthor(@Body() body:AuthorDto){
        const author = await this.authorService.insertAuthor(body)
        return{
            message: `Author was inserted`,
        }
    }
}
