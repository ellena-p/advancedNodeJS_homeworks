import { IsNotEmpty } from 'class-validator';
import { Product } from 'src/interfaces/product.interface';

export class UpdateDto
{
    @IsNotEmpty()
    productsOrdered: Product[];
}