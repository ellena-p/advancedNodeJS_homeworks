import { Injectable } from '@nestjs/common';
import { Product } from 'src/interfaces/product.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsEntity } from './entities/product.entity';
import { Repository } from 'typeorm';
import { ProductDto, UpdateProductDto } from './dto/product.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(ProductsEntity)
        private readonly productsRepository : Repository <ProductsEntity>
    ){}
    private _products:Product[] = [
        { id: "1", productName: "Cesar Salad", productPrice: 250 },
        { id: "2", productName: " Egg Salad", productPrice: 200 },
        {id:"3", productName:"Tomato Salad", productPrice: 190}
    ]
    
    getAllProducts(){
        return this.productsRepository.find();
    }

    async productById(id:string){
        const product = await this.productsRepository.findOneBy({ id: id });
        
        return product;
    }

    async createProduct(productDto: ProductDto){
        const product: Product ={
            id: uuid(),
            ...productDto,
        }

        const createProduct = this.productsRepository.create(product);

        const saveProduct = await this.productsRepository.save(createProduct);
        return product.id
    }

    async remove(id:string){
        const remove = await this.productsRepository.delete(id);
    }

    async update(id:string, updateProductDto:UpdateProductDto){
        const updateProduct: Product ={
            id:id,
            ...updateProductDto
        }

        const product = await this.productsRepository.preload({
            id:id,
            ...updateProduct
        });

        await this.productsRepository.save(product);
        
        return product.id
    }

}
