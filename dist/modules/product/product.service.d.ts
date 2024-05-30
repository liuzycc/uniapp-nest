import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { ProductDto } from './dot/product.dot';
export declare class ProductService {
    private productRepository;
    constructor(productRepository: Repository<Product>);
    findAll(findInfo: {
        id?: string;
        title?: string;
        sort1?: string;
        sort2?: string;
    }): Promise<any[]>;
    create(productInfo: ProductDto): Promise<ProductDto & Product>;
    update(productInfo: ProductDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").UpdateResult>;
}
