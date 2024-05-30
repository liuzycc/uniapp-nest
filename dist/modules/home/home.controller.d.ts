import { HttpService } from '@nestjs/axios';
import { HomeService } from './home.service';
import { HomeDto } from './dot/home.dot';
export declare class HomeController {
    private readonly homeService;
    private readonly httpService;
    constructor(homeService: HomeService, httpService: HttpService);
    findAll(): Promise<import("./entities/home.entity").Home[]>;
    createHome(createHome: HomeDto): Promise<HomeDto & import("./entities/home.entity").Home>;
    updateHome(updateHome: HomeDto): Promise<import("typeorm").UpdateResult>;
}
