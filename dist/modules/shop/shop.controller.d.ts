import { HttpService } from '@nestjs/axios';
import { ShopService } from './shop.service';
import { ShopDto } from './dot/shop.dot';
export declare class ShopController {
    private readonly shopService;
    private readonly httpService;
    constructor(shopService: ShopService, httpService: HttpService);
    findAll(query: any): Promise<any[]>;
    findIdInfo(info: any): Promise<import("./entities/shop.entity").Shop[]>;
    findUserListAll(info: any): Promise<import("./entities/shop.entity").Shop[]>;
    createShop(createShop: ShopDto): Promise<ShopDto & import("./entities/shop.entity").Shop>;
    updateShop(updateShop: ShopDto): Promise<import("typeorm").UpdateResult>;
    removeShop(info: {
        id: number;
    }): Promise<import("typeorm").UpdateResult>;
}
