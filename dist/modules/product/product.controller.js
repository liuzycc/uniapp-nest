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
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const product_service_1 = require("./product.service");
const product_dot_1 = require("./dot/product.dot");
let ProductController = exports.ProductController = class ProductController {
    constructor(productService, httpService) {
        this.productService = productService;
        this.httpService = httpService;
    }
    async findAll(query) {
        const res = await this.productService.findAll(query);
        return res;
    }
    async createProduct(createProduct) {
        const { title } = createProduct;
        if (!title) {
            throw new common_1.HttpException('缺少必填字段title', common_1.HttpStatus.BAD_REQUEST);
        }
        const res = await this.productService.create(createProduct);
        return res;
    }
    async updateProduct(updateProduct) {
        const { id } = updateProduct;
        if (!id) {
            throw new common_1.HttpException('缺少必填字段id', common_1.HttpStatus.BAD_REQUEST);
        }
        const res = await this.productService.update(updateProduct);
        return res;
    }
    async removeProduct(info) {
        if (!info.id) {
            throw new common_1.HttpException('缺少必填字段id', common_1.HttpStatus.BAD_REQUEST);
        }
        const res = await this.productService.remove(info.id);
        return res;
    }
};
__decorate([
    (0, common_1.Get)('/list'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_dot_1.ProductDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "createProduct", null);
__decorate([
    (0, common_1.Post)('/update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_dot_1.ProductDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "updateProduct", null);
__decorate([
    (0, common_1.Post)('/remove'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "removeProduct", null);
exports.ProductController = ProductController = __decorate([
    (0, common_1.Controller)('product'),
    __metadata("design:paramtypes", [product_service_1.ProductService,
        axios_1.HttpService])
], ProductController);
//# sourceMappingURL=product.controller.js.map