import { AuthorEntity } from "src/author/entities/author.entity";
import { Author } from "src/interfaces/author.interface";
import { Publisher } from "src/interfaces/publisher.interface";
import { PublisherEntity } from "src/publisher/entities/publisher.entity";
import { Column, Entity,  JoinColumn,  OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('books')
export class BookEntity{
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    genre: string;

    @OneToOne(()=> AuthorEntity, (author)=> author.books)
    @JoinColumn()
    author: Author;

    @OneToOne(()=> PublisherEntity, (publisher)=> publisher.books)
    @JoinColumn()
    publisher: Publisher;

}