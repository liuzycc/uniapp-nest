import { Repository } from 'typeorm';
import { Users } from './entities/users.entity';
import { WxConfig } from './entities/wxconfig.entity';
import { UsersDto } from './dot/users.dot';
import { wxTokenDto } from './dot/wxconfig.dot';
export declare class UsersService {
    private usersRepository;
    private wxConfigRepository;
    constructor(usersRepository: Repository<Users>, wxConfigRepository: Repository<WxConfig>);
    findAll(findUserInfo: {
        name?: string;
        phone?: string;
        address?: string;
    }): Promise<any[]>;
    findOne(openid: string): Promise<Users | null>;
    create(openid: string): Promise<{
        openid: string;
    } & Users>;
    update(user: UsersDto): Promise<import("typeorm").UpdateResult>;
    getWxconfig(): Promise<WxConfig | null>;
    upDateAccessToken(wxToken: wxTokenDto): Promise<import("typeorm").UpdateResult>;
}
