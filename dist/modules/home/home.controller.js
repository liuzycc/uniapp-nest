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
exports.HomeController = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const home_service_1 = require("./home.service");
const home_dot_1 = require("./dot/home.dot");
let HomeController = exports.HomeController = class HomeController {
    constructor(homeService, httpService) {
        this.homeService = homeService;
        this.httpService = httpService;
    }
    async findAll() {
        const res = await this.homeService.findAll();
        return res;
    }
    async createHome(createHome) {
        const res = await this.homeService.create(createHome);
        return res;
    }
    async updateHome(updateHome) {
        const { id } = updateHome;
        if (!id) {
            throw new common_1.HttpException('缺少必填字段id', common_1.HttpStatus.BAD_REQUEST);
        }
        const res = await this.homeService.update(updateHome);
        return res;
    }
};
__decorate([
    (0, common_1.Get)('/list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [home_dot_1.HomeDto]),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "createHome", null);
__decorate([
    (0, common_1.Post)('/update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [home_dot_1.HomeDto]),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "updateHome", null);
exports.HomeController = HomeController = __decorate([
    (0, common_1.Controller)('home'),
    __metadata("design:paramtypes", [home_service_1.HomeService,
        axios_1.HttpService])
], HomeController);
//# sourceMappingURL=home.controller.js.map