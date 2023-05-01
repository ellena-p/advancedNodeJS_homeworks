import { ArrayNotEmpty, IsArray } from 'class-validator';
import { Product } from 'src/interfaces/product.interface';

export class UpdateDto
{
    @IsArray()
    @ArrayNotEmpty()
    productsOrdered: Product[];
}