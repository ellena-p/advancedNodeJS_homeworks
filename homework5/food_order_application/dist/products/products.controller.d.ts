import { ProductsService } from './products.service';
import { ProductDto } from './dto/product.dto';
interface IdParam {
    id: string;
}
export declare class ProductsController {
    private readonly productService;
    constructor(productService: ProductsService);
    getAllProducts(): Promise<import("./entities/product.entity").ProductsEntity[]>;
    productById(params: IdParam): Promise<import("./entities/product.entity").ProductsEntity>;
    createProduct(body: ProductDto): Promise<{
        message: string;
        id: string;
    }>;
}
export {};
