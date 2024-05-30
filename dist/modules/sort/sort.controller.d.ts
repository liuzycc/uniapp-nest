import { HttpService } from '@nestjs/axios';
import { SortService } from './sort.service';
import { SortDto } from './dot/sort.dot';
export declare class SortController {
    private readonly sortService;
    private readonly httpService;
    constructor(sortService: SortService, httpService: HttpService);
    findAll(sortInfo: any): Promise<any[]>;
    createSort(createSort: SortDto): Promise<SortDto & import("./entities/sort.entity").Sort>;
    updateSort(updateSort: SortDto): Promise<import("typeorm").UpdateResult>;
    removeSort(info: {
        idList: number[];
    }): Promise<string>;
}
