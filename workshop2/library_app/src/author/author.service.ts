import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthorEntity } from './entities/author.entity';
import { Repository } from 'typeorm';
import { AuthorDto } from './dto/author.dto';
import { Author } from 'src/interfaces/author.interface';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(AuthorEntity)
    private readonly authorRepository: Repository<AuthorEntity>,
  ) {}

  getAuthors() {
    return this.authorRepository.find({
      relations: ['books'],
    });
  }

  
  async insertAuthor (authorDto:AuthorDto){
    const author: Author={
      ...authorDto,
      birthDate: new Date(authorDto.birthDate)
    }

    const authorInserted = this.authorRepository.create(author);
    const authorSaved = await this.authorRepository.save(authorInserted);
  }
}
