import { HttpService } from '@nestjs/axios';
import { ImageService } from './image.service';
import { ImageDto } from './dot/image.dot';
export declare class ImageController {
    private readonly imageService;
    private readonly httpService;
    constructor(imageService: ImageService, httpService: HttpService);
    findAll(): Promise<import("./entities/image.entity").Image[]>;
    createProduct(createProduct: ImageDto): Promise<ImageDto & import("./entities/image.entity").Image>;
    removeImage(info: {
        name: string;
    }): Promise<import("typeorm").UpdateResult>;
    uploadFile(file: any): Promise<{
        name: any;
        url: string;
    }>;
}
