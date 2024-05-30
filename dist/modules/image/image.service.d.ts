import { Repository } from 'typeorm';
import { Image } from './entities/image.entity';
import { ImageDto } from './dot/image.dot';
export declare class ImageService {
    private imageRepository;
    constructor(imageRepository: Repository<Image>);
    findAll(): Promise<Image[]>;
    create(imageInfo: ImageDto): Promise<ImageDto & Image>;
    remove(name: string): Promise<import("typeorm").UpdateResult>;
}
