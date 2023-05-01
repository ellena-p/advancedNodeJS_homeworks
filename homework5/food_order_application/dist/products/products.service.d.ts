import { ProductsEntity } from './entities/product.entity';
import { Repository } from 'typeorm';
import { ProductDto } from './dto/product.dto';
export declare class ProductsService {
    private readonly productsRepository;
    constructor(productsRepository: Repository<ProductsEntity>);
    private _products;
    getAllProducts(): Promise<ProductsEntity[]>;
    productById(id: string): Promise<ProductsEntity>;
    createProduct(productDto: ProductDto): Promise<string>;
}
