import { Entity, Column, PrimaryColumn,ManyToOne } from 'typeorm';
import { Product } from 'src/interfaces/product.interface';
import { type } from 'os';
import { OrderEntity } from 'src/order/entities/order.entity';

@Entity('products')
export class ProductsEntity implements Product {
    @PrimaryColumn()
    id: string;

    @Column()
    productName: string ;

    @Column()
    productPrice:number;

    @ManyToOne(() => OrderEntity, (order) => order.productsOrdered)
    order: OrderEntity;
}
