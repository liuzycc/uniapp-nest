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
exports.CarController = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const car_service_1 = require("./car.service");
const car_dot_1 = require("./dot/car.dot");
let CarController = exports.CarController = class CarController {
    constructor(carService, httpService) {
        this.carService = carService;
        this.httpService = httpService;
    }
    async findAll() {
        const res = await this.carService.findAll();
        return res;
    }
    async findUserCar(query) {
        console.log(query.userId);
        const res = await this.carService.findUser(query.userId);
        return res;
    }
    async createCar(createCar) {
        const { userId } = createCar;
        if (!userId) {
            throw new common_1.HttpException('缺少必填字段userId', common_1.HttpStatus.BAD_REQUEST);
        }
        const res = await this.carService.create(createCar);
        return res;
    }
    async updateCar(updateCar) {
        const { userId } = updateCar;
        if (!userId) {
            throw new common_1.HttpException('缺少必填字段userId', common_1.HttpStatus.BAD_REQUEST);
        }
        const res = await this.carService.update(updateCar);
        return res;
    }
};
__decorate([
    (0, common_1.Get)('/list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CarController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/findUserCar'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CarController.prototype, "findUserCar", null);
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [car_dot_1.CarDto]),
    __metadata("design:returntype", Promise)
], CarController.prototype, "createCar", null);
__decorate([
    (0, common_1.Post)('/update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [car_dot_1.CarDto]),
    __metadata("design:returntype", Promise)
], CarController.prototype, "updateCar", null);
exports.CarController = CarController = __decorate([
    (0, common_1.Controller)('car'),
    __metadata("design:paramtypes", [car_service_1.CarService,
        axios_1.HttpService])
], CarController);
//# sourceMappingURL=car.controller.js.map