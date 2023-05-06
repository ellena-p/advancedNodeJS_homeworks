
import { BookEntity } from "src/book/entities/book.entity";
import { Author } from "src/interfaces/author.interface";

import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('authors')
export class AuthorEntity implements Author{
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    birthDate: Date;

    @OneToMany(() => BookEntity, (bookEntity) => bookEntity.author)
    books: BookEntity[];
}