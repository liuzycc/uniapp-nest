import { Repository } from 'typeorm';
import { Sort } from './entities/sort.entity';
import { SortDto } from './dot/sort.dot';
export declare class SortService {
    private sortRepository;
    constructor(sortRepository: Repository<Sort>);
    findAll(sortInfo?: {
        level: number;
    }): Promise<any[]>;
    create(sortInfo: SortDto): Promise<SortDto & Sort>;
    update(sortInfo: SortDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").UpdateResult>;
}
