import {
    Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { BookService } from './book.service';
import { BookDto } from './dto/book.dto';

interface IdRouteParams {
  id: string;
}

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  getBooks() {
    const books = this.bookService.getBooks();
    return books;
  }


  
  @Post ()
  async insertBook(@Body() body: BookDto, 
  @Param('authorId') authorId:string,
  @Param('publisherId') publisherId:string){
    const bookId = await this.bookService.insertBook(body, authorId, publisherId);
    return{
        message: `Book was inserted`,
        id: bookId
    }
  }

}
