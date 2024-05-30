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
exports.CarService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const car_entity_1 = require("./entities/car.entity");
let CarService = exports.CarService = class CarService {
    constructor(carRepository) {
        this.carRepository = carRepository;
    }
    findAll() {
        return this.carRepository.find();
    }
    async findUser(userId) {
        try {
            const tempr = await this.carRepository.find({ where: { userId } });
            if (tempr.length === 0) {
                await this.create({ userId, list: JSON.stringify([]) });
            }
            const queryBuilder = this.carRepository.createQueryBuilder('car');
            queryBuilder
                .where('car.userId = :userId', { userId })
                .leftJoin('users', 'usersTemp', 'car.userId = usersTemp.id')
                .addSelect('usersTemp.address', 'address')
                .addSelect('usersTemp.phone', 'phone')
                .addSelect('usersTemp.name', 'name');
            const result = await queryBuilder.getRawMany();
            const res = result.map((item) => {
                const t = {};
                for (let key in item) {
                    const v = item[key];
                    if (key.includes('car_')) {
                        key = key.split('car_')[1];
                    }
                    t[key] = v;
                }
                return t;
            });
            return res;
        }
        catch (e) {
            throw new common_1.HttpException(`创建失败：${e}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async create(carInfo) {
        try {
            const res = await this.carRepository.save(carInfo);
            return res;
        }
        catch (e) {
            throw new common_1.HttpException(`创建失败：${e}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async update(carInfo) {
        try {
            const { userId, ...arg } = carInfo;
            const res = await this.carRepository.update({ userId }, { ...arg });
            return res;
        }
        catch (e) {
            throw new common_1.HttpException(`更新失败：${e}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.CarService = CarService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(car_entity_1.Car)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CarService);
//# sourceMappingURL=car.service.js.map