import { Repository } from 'typeorm';
import { Home } from './entities/home.entity';
import { HomeDto } from './dot/home.dot';
export declare class HomeService {
    private homeRepository;
    constructor(homeRepository: Repository<Home>);
    findAll(): Promise<Home[]>;
    create(homeInfo: HomeDto): Promise<HomeDto & Home>;
    update(homeInfo: HomeDto): Promise<import("typeorm").UpdateResult>;
}
