import { IsNotEmpty } from "class-validator";

export class ProductDto{
    @IsNotEmpty()
    productName: string;
    @IsNotEmpty()
    productPrice: number;
}