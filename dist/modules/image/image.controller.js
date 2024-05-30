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
exports.ImageController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const axios_1 = require("@nestjs/axios");
const image_service_1 = require("./image.service");
const image_dot_1 = require("./dot/image.dot");
let ImageController = exports.ImageController = class ImageController {
    constructor(imageService, httpService) {
        this.imageService = imageService;
        this.httpService = httpService;
    }
    async findAll() {
        const res = await this.imageService.findAll();
        return res;
    }
    async createProduct(createProduct) {
        const { path, url } = createProduct;
        if (!path || !url) {
            throw new common_1.HttpException('缺少必填字段', common_1.HttpStatus.BAD_REQUEST);
        }
        const res = await this.imageService.create(createProduct);
        return res;
    }
    async removeImage(info) {
        if (!info.name) {
            throw new common_1.HttpException('缺少必填字段name', common_1.HttpStatus.BAD_REQUEST);
        }
        const res = await this.imageService.remove(info.name);
        return res;
    }
    async uploadFile(file) {
        console.log(file);
        const { filename: name, originalname: originName, path } = file;
        await this.imageService.create({
            url: `/${name}`,
            name,
            originName,
            path,
            isDelete: 0,
        });
        return {
            name,
            url: `/${name}`,
        };
    }
};
__decorate([
    (0, common_1.Get)('/list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ImageController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [image_dot_1.ImageDto]),
    __metadata("design:returntype", Promise)
], ImageController.prototype, "createProduct", null);
__decorate([
    (0, common_1.Post)('/remove'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ImageController.prototype, "removeImage", null);
__decorate([
    (0, common_1.Post)('/upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ImageController.prototype, "uploadFile", null);
exports.ImageController = ImageController = __decorate([
    (0, common_1.Controller)('image'),
    __metadata("design:paramtypes", [image_service_1.ImageService,
        axios_1.HttpService])
], ImageController);
//# sourceMappingURL=image.controller.js.map