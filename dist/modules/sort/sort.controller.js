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
exports.SortController = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const sort_service_1 = require("./sort.service");
const sort_dot_1 = require("./dot/sort.dot");
let SortController = exports.SortController = class SortController {
    constructor(sortService, httpService) {
        this.sortService = sortService;
        this.httpService = httpService;
    }
    async findAll(sortInfo) {
        console.log(sortInfo);
        const res = await this.sortService.findAll(sortInfo);
        return res;
    }
    async createSort(createSort) {
        const { title } = createSort;
        if (!title) {
            throw new common_1.HttpException('缺少必填字段title', common_1.HttpStatus.BAD_REQUEST);
        }
        const res = await this.sortService.create(createSort);
        return res;
    }
    async updateSort(updateSort) {
        const { id } = updateSort;
        if (!id) {
            throw new common_1.HttpException('缺少必填字段id', common_1.HttpStatus.BAD_REQUEST);
        }
        const res = await this.sortService.update(updateSort);
        return res;
    }
    async removeSort(info) {
        if (!info.idList.length) {
            throw new common_1.HttpException('缺少必填字段id', common_1.HttpStatus.BAD_REQUEST);
        }
        try {
            for (let i = 0; i < info.idList.length; i++) {
                const id = info.idList[i];
                await this.sortService.remove(id);
            }
            return '删除成功';
        }
        catch {
            throw new common_1.HttpException('删除分类异常', common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
__decorate([
    (0, common_1.Get)('/list'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SortController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sort_dot_1.SortDto]),
    __metadata("design:returntype", Promise)
], SortController.prototype, "createSort", null);
__decorate([
    (0, common_1.Post)('/update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sort_dot_1.SortDto]),
    __metadata("design:returntype", Promise)
], SortController.prototype, "updateSort", null);
__decorate([
    (0, common_1.Post)('/remove'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SortController.prototype, "removeSort", null);
exports.SortController = SortController = __decorate([
    (0, common_1.Controller)('sort'),
    __metadata("design:paramtypes", [sort_service_1.SortService,
        axios_1.HttpService])
], SortController);
//# sourceMappingURL=sort.controller.js.map