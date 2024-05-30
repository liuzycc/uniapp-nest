"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const users_entity_1 = require("./entities/users.entity");
const wxconfig_entity_1 = require("./entities/wxconfig.entity");
let UsersService = exports.UsersService = class UsersService {
    constructor(usersRepository, wxConfigRepository) {
        this.usersRepository = usersRepository;
        this.wxConfigRepository = wxConfigRepository;
    }
    async findAll(findUserInfo) {
        try {
            const queryBuilder = this.usersRepository.createQueryBuilder('users');
            if (findUserInfo.name) {
                queryBuilder.andWhere('users.name LIKE :name', {
                    name: `%${findUserInfo.name}%`,
                });
            }
            if (findUserInfo.phone) {
                queryBuilder.andWhere('users.phone LIKE :phone', {
                    phone: `%${findUserInfo.phone}%`,
                });
            }
            if (findUserInfo.address) {
                queryBuilder.andWhere('users.address LIKE :address', {
                    address: `%${findUserInfo.address}%`,
                });
            }
            const result = await queryBuilder.getRawMany();
            const res = result.map((item) => {
                const t = {};
                for (let key in item) {
                    const v = item[key];
                    if (key.includes('users_')) {
                        key = key.split('users_')[1];
                    }
                    t[key] = v;
                }
                return t;
            });
            return res;
        }
        catch (e) {
            throw new common_1.HttpException(`查询失败：${e}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findOne(openid) {
        try {
            const res = await this.usersRepository.findOne({
                where: {
                    openid,
                },
            });
            return res;
        }
        catch (e) {
            throw new common_1.HttpException(`查询失败${e}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async create(openid) {
        try {
            const res = await this.usersRepository.save({ openid });
            return res;
        }
        catch (e) {
            throw new common_1.HttpException(`创建失败：${e}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async update(user) {
        try {
            const { openid, ...arg } = user;
            const res = await this.usersRepository.update({ openid }, arg);
            return res;
        }
        catch (e) {
            throw new common_1.HttpException(`更新失败：${e}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async getWxconfig() {
        try {
            const res = await this.wxConfigRepository.findOne({
                where: {
                    id: 1,
                },
            });
            return res;
        }
        catch (e) {
            throw new common_1.HttpException(`获取微信配置失败：${e}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async upDateAccessToken(wxToken) {
        try {
            const { access_token, access_token_time } = wxToken;
            const res = await this.wxConfigRepository.update({ id: 1 }, { access_token, access_token_time });
            return res;
        }
        catch (e) {
            throw new common_1.HttpException(`更新小程序access-token失败${e}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(users_entity_1.Users)),
    __param(1, (0, typeorm_1.InjectRepository)(wxconfig_entity_1.WxConfig)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], UsersService);
//# sourceMappingURL=users.service.js.map