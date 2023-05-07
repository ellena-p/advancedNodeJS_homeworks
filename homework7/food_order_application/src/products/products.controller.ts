import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductDto, UpdateProductDto } from './dto/product.dto';
import { RolesGuard } from 'src/common/auth/role.guard/role.guard';
import { Roles } from 'src/common/decorators/rolers.decorator';
import { Role } from 'src/interfaces/user.interface';
interface IdParam {
    id: string;
  }
  
@Controller('products')
@UseGuards(RolesGuard)
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
    @Roles(Role.ADMIN)
    async createProduct (@Body() body: ProductDto){
        const id = await this.productService.createProduct(body);

        return {
            message: `Product was created`,
            id : id
        }
    }

   
    @Delete(':id')
    @Roles(Role.ADMIN)
    async delete(@Param('id') id:string){
        await this.productService.remove(id);

        return {
            message: `Product with id: ${id} was removed.`,
        }
    }

    
    @Put(':id')
    @Roles(Role.ADMIN)
    async update(@Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto){
        const productId = await this.productService.update(id, updateProductDto);

        return {
            message: 'Product was updated',
            id: productId,
          };
    }
}
