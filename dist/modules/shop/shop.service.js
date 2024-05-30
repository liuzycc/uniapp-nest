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
exports.ShopService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const shop_entity_1 = require("./entities/shop.entity");
let ShopService = exports.ShopService = class ShopService {
    constructor(shopRepository) {
        this.shopRepository = shopRepository;
    }
    async findAll(findInfo) {
        try {
            const queryBuilder = this.shopRepository.createQueryBuilder('shop');
            queryBuilder.andWhere('shop.isDelete = :isDelete', { isDelete: 0 });
            if (findInfo.sname) {
                queryBuilder.andWhere('shop.sname LIKE :sname', {
                    sname: `%${findInfo.sname}%`,
                });
            }
            if (findInfo.sphone) {
                queryBuilder.andWhere('shop.sphone LIKE :sphone', {
                    sphone: `%${findInfo.sphone}%`,
                });
            }
            if (findInfo.saddress) {
                queryBuilder.andWhere('shop.saddress LIKE :saddress', {
                    saddress: `%${findInfo.saddress}%`,
                });
            }
            if (findInfo.status == 0 ||
                findInfo.status == 1 ||
                findInfo.status == 2) {
                queryBuilder.andWhere('shop.status = :status', {
                    status: findInfo.status,
                });
            }
            const result = await queryBuilder.getRawMany();
            const shopList = result.map((item) => {
                const t = {};
                for (let key in item) {
                    const v = item[key];
                    if (key.includes('shop_')) {
                        key = key.split('shop_')[1];
                    }
                    t[key] = v;
                }
                return t;
            });
            return shopList.map((item) => {
                item.products && (item.products = JSON.parse(item.products));
                return item;
            });
        }
        catch (e) {
            throw new common_1.HttpException(`查询失败：${e}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    findUserAll(info) {
        return this.shopRepository.find({
            where: { userId: info.userId },
        });
    }
    findIdAll(info) {
        return this.shopRepository.find({
            where: { id: info.id },
        });
    }
    async create(shopInfo) {
        try {
            const res = await this.shopRepository.save(shopInfo);
            return res;
        }
        catch (e) {
            throw new common_1.HttpException(`创建失败：${e}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async update(shopInfo) {
        try {
            const { id, ...arg } = shopInfo;
            const res = await this.shopRepository.update({ id }, { ...arg });
            return res;
        }
        catch (e) {
            throw new common_1.HttpException(`更新失败：${e}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async remove(id) {
        try {
            const res = await this.shopRepository.update({ id }, { isDelete: 1 });
            return res;
        }
        catch (e) {
            throw new common_1.HttpException(`更新失败：${e}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.ShopService = ShopService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(shop_entity_1.Shop)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ShopService);
//# sourceMappingURL=shop.service.js.map