import { Repository } from 'typeorm';
import { Shop } from './entities/shop.entity';
import { ShopDto } from './dot/shop.dot';
export declare class ShopService {
    private shopRepository;
    constructor(shopRepository: Repository<Shop>);
    findAll(findInfo: {
        sname?: string;
        sphone?: string;
        saddress?: string;
        status?: 0 | 1 | 2;
    }): Promise<any[]>;
    findUserAll(info: ShopDto): Promise<Shop[]>;
    findIdAll(info: ShopDto): Promise<Shop[]>;
    create(shopInfo: ShopDto): Promise<ShopDto & Shop>;
    update(shopInfo: ShopDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").UpdateResult>;
}
