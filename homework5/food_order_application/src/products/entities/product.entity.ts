import { Entity, Column, PrimaryColumn } from 'typeorm';
import { Product } from 'src/interfaces/product.interface';
import { type } from 'os';

@Entity('products')
export class ProductsEntity implements Product {
    @PrimaryColumn()
    id: string;

    @Column()
    productName: string ;

    @Column()
    productPrice:number;
}
