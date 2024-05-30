import { Request } from 'express';
import { CreateCatDto } from './cats.dto';
export declare class CatsController {
    findAll(request: Request): string;
    create(createCatDto: CreateCatDto): Promise<string>;
}
