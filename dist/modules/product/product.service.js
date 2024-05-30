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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const product_entity_1 = require("./entities/product.entity");
let ProductService = exports.ProductService = class ProductService {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async findAll(findInfo) {
        console.log(findInfo);
        try {
            const queryBuilder = this.productRepository.createQueryBuilder('product');
            queryBuilder
                .leftJoin('sort', 'level1Sort', 'product.sort1 = level1Sort.id')
                .addSelect('level1Sort.title', 'sort1Name')
                .leftJoin('sort', 'level2Sort', 'product.sort2 = level2Sort.id')
                .addSelect('level2Sort.title', 'sort2Name')
                .andWhere('product.isDelete = :isDelete', { isDelete: 0 });
            if (findInfo.id) {
                queryBuilder.andWhere('product.id = :id', {
                    id: findInfo.id,
                });
            }
            if (findInfo.title) {
                queryBuilder.andWhere('product.title LIKE :title', {
                    title: `%${findInfo.title}%`,
                });
            }
            if (findInfo.sort1) {
                queryBuilder.andWhere('product.sort1 = :sort1', {
                    sort1: findInfo.sort1,
                });
            }
            if (findInfo.sort2) {
                queryBuilder.andWhere('product.sort2 = :sort2', {
                    sort2: findInfo.sort2,
                });
            }
            const result = await queryBuilder.getRawMany();
            const res = result.map((item) => {
                const t = {};
                for (let key in item) {
                    const v = item[key];
                    if (key.includes('product_')) {
                        key = key.split('product_')[1];
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
    async create(productInfo) {
        try {
            const res = await this.productRepository.save(productInfo);
            return res;
        }
        catch (e) {
            throw new common_1.HttpException(`创建失败：${e}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async update(productInfo) {
        try {
            const { id, ...arg } = productInfo;
            const res = await this.productRepository.update({ id }, { ...arg });
            return res;
        }
        catch (e) {
            throw new common_1.HttpException(`更新失败：${e}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async remove(id) {
        try {
            const res = await this.productRepository.update({ id }, { isDelete: 1 });
            return res;
        }
        catch (e) {
            throw new common_1.HttpException(`更新失败：${e}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProductService);
//# sourceMappingURL=product.service.js.map