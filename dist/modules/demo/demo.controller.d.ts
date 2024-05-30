import { Request } from 'express';
import { CreateDemoDto } from './dot/demo.dot';
import { Repository } from 'typeorm';
import { Demo } from './entities/demo.entities';
export declare class DemoController {
    private usersRepository;
    constructor(usersRepository: Repository<Demo>);
    findAll(request: Request): string;
    create(createCatDto: CreateDemoDto): Promise<string>;
}
