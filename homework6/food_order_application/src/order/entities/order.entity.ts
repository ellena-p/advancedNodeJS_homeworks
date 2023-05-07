import { Order } from "src/interfaces/order.interface";
import { Product } from "src/interfaces/product.interface";
import { ProductsEntity } from "src/products/entities/product.entity";
import { Entity,Column, PrimaryColumn,OneToMany} from 'typeorm';

@Entity ('orders')
export class OrderEntity implements Order {
    @PrimaryColumn()
    id: string;

    @Column()
    orderDate: Date;

    @OneToMany(()=> ProductsEntity, (productsEntity) => productsEntity.order)
    productsOrdered: Product[];
    
}
