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
exports.ShopController = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const shop_service_1 = require("./shop.service");
const shop_dot_1 = require("./dot/shop.dot");
let ShopController = exports.ShopController = class ShopController {
    constructor(shopService, httpService) {
        this.shopService = shopService;
        this.httpService = httpService;
    }
    async findAll(query) {
        const res = await this.shopService.findAll(query);
        return res;
    }
    async findIdInfo(info) {
        const { id } = info;
        if (!id) {
            throw new common_1.HttpException('缺少必填字段id', common_1.HttpStatus.BAD_REQUEST);
        }
        const res = await this.shopService.findIdAll(info);
        return res;
    }
    async findUserListAll(info) {
        const { userId } = info;
        if (!userId) {
            throw new common_1.HttpException('缺少必填字段userId', common_1.HttpStatus.BAD_REQUEST);
        }
        const res = await this.shopService.findUserAll(info);
        return res;
    }
    async createShop(createShop) {
        const { userId } = createShop;
        if (!userId) {
            throw new common_1.HttpException('缺少必填字段userId', common_1.HttpStatus.BAD_REQUEST);
        }
        const res = await this.shopService.create(createShop);
        return res;
    }
    async updateShop(updateShop) {
        const { id } = updateShop;
        if (!id) {
            throw new common_1.HttpException('缺少必填字段id', common_1.HttpStatus.BAD_REQUEST);
        }
        const res = await this.shopService.update(updateShop);
        return res;
    }
    async removeShop(info) {
        if (!info.id) {
            throw new common_1.HttpException('缺少必填字段id', common_1.HttpStatus.BAD_REQUEST);
        }
        const res = await this.shopService.remove(info.id);
        return res;
    }
};
__decorate([
    (0, common_1.Get)('/list'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ShopController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/findIdInfo'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ShopController.prototype, "findIdInfo", null);
__decorate([
    (0, common_1.Get)('/findUserList'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ShopController.prototype, "findUserListAll", null);
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [shop_dot_1.ShopDto]),
    __metadata("design:returntype", Promise)
], ShopController.prototype, "createShop", null);
__decorate([
    (0, common_1.Post)('/update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [shop_dot_1.ShopDto]),
    __metadata("design:returntype", Promise)
], ShopController.prototype, "updateShop", null);
__decorate([
    (0, common_1.Post)('/remove'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ShopController.prototype, "removeShop", null);
exports.ShopController = ShopController = __decorate([
    (0, common_1.Controller)('shop'),
    __metadata("design:paramtypes", [shop_service_1.ShopService,
        axios_1.HttpService])
], ShopController);
//# sourceMappingURL=shop.controller.js.map