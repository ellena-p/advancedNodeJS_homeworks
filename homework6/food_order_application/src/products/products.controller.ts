import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductDto } from './dto/product.dto';
interface IdParam {
    id: string;
  }
  
@Controller('products')
export class ProductsController {
    
    constructor(
        private readonly productService: ProductsService
    ){}

    @Get()
    getAllProducts(){
        const products = this.productService.getAllProducts();
        return products
    }

    @Get(':id')
    productById (@Param() params: IdParam){
        const id:string = params.id
        const product = this.productService.productById(id);
        return product;
    }

    @Post ()
    async createProduct (@Body() body: ProductDto){
        const id = await this.productService.createProduct(body);

        return {
            message: `Product was created`,
            id : id
        }
    }
}
