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
exports.SortService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const sort_entity_1 = require("./entities/sort.entity");
let SortService = exports.SortService = class SortService {
    constructor(sortRepository) {
        this.sortRepository = sortRepository;
    }
    async findAll(sortInfo) {
        try {
            const queryBuilder = this.sortRepository.createQueryBuilder('sort');
            queryBuilder.andWhere('sort.isDelete = :isDelete', { isDelete: 0 });
            if (sortInfo?.level && sortInfo.level == 1) {
                queryBuilder.andWhere('sort.level1 != :level', {
                    level: 0,
                });
            }
            if (sortInfo?.level && sortInfo.level == 2) {
                queryBuilder.andWhere('sort.level2 != :level', {
                    level: 0,
                });
            }
            const result = await queryBuilder.getRawMany();
            const res = result.map((item) => {
                const t = {};
                for (let key in item) {
                    const v = item[key];
                    if (key.includes('sort_')) {
                        key = key.split('sort_')[1];
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
    async create(sortInfo) {
        try {
            const res = await this.sortRepository.save(sortInfo);
            return res;
        }
        catch (e) {
            throw new common_1.HttpException(`创建失败：${e}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async update(sortInfo) {
        try {
            const { id, ...arg } = sortInfo;
            const res = await this.sortRepository.update({ id }, { ...arg });
            return res;
        }
        catch (e) {
            throw new common_1.HttpException(`更新失败：${e}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async remove(id) {
        try {
            const res = await this.sortRepository.update({ id }, { isDelete: 1 });
            return res;
        }
        catch (e) {
            throw new common_1.HttpException(`更新失败：${e}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.SortService = SortService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(sort_entity_1.Sort)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SortService);
//# sourceMappingURL=sort.service.js.map