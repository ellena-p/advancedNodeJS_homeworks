import {IsNotEmpty} from 'class-validator';
import { Product } from 'src/interfaces/product.interface';

export class OrderDto{
    @IsNotEmpty()
    productsOrdered: Product[];
}