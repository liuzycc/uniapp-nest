import { HttpService } from '@nestjs/axios';
import { ProductService } from './product.service';
import { ProductDto } from './dot/product.dot';
export declare class ProductController {
    private readonly productService;
    private readonly httpService;
    constructor(productService: ProductService, httpService: HttpService);
    findAll(query: any): Promise<any[]>;
    createProduct(createProduct: ProductDto): Promise<ProductDto & import("./entities/product.entity").Product>;
    updateProduct(updateProduct: ProductDto): Promise<import("typeorm").UpdateResult>;
    removeProduct(info: {
        id: number;
    }): Promise<import("typeorm").UpdateResult>;
}
