import { BookEntity } from "src/book/entities/book.entity";
import { Book } from "src/interfaces/book.interface";
import { Publisher } from "src/interfaces/publisher.interface";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('publishers')
export class PublisherEntity implements Publisher {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    address: string;

    @Column()
    phoneNumber: string;

    @OneToMany(() => BookEntity, (bookEntity) => bookEntity.publisher)
    books: BookEntity[];
    
}