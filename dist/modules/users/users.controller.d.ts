import { HttpService } from '@nestjs/axios';
import { UsersService } from './users.service';
import { UsersDto } from './dot/users.dot';
export declare class UsersController {
    private readonly userService;
    private readonly httpService;
    constructor(userService: UsersService, httpService: HttpService);
    findAll(findUserInfo: any): Promise<any[]>;
    createUser(createUser: UsersDto & {
        code: string;
    }): Promise<any>;
    UpdateUser(user: UsersDto): Promise<import("typeorm").UpdateResult>;
    cc(): Promise<{
        abc: string;
    }>;
}
