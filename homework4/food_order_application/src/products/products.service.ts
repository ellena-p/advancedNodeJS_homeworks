import { Injectable } from '@nestjs/common';
import { Product } from 'src/interfaces/product.interface';

@Injectable()
export class ProductsService {
    private _products:Product[] = [
        { id: "1", productName: "Cesar Salad", productPrice: 250 },
        { id: "2", productName: " Egg Salad", productPrice: 200 },
        {id:"3", productName:"Tomato Salad", productPrice: 190}
    ]
    
    getAllProducts(){
        return this._products;
    }
}
