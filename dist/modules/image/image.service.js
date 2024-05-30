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
exports.ImageService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const image_entity_1 = require("./entities/image.entity");
let ImageService = exports.ImageService = class ImageService {
    constructor(imageRepository) {
        this.imageRepository = imageRepository;
    }
    findAll() {
        return this.imageRepository.find();
    }
    async create(imageInfo) {
        try {
            const res = await this.imageRepository.save(imageInfo);
            return res;
        }
        catch (e) {
            throw new common_1.HttpException(`创建失败：${e}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async remove(name) {
        try {
            const res = await this.imageRepository.update({ name }, { isDelete: 1 });
            return res;
        }
        catch (e) {
            throw new common_1.HttpException(`更新失败：${e}`, common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
exports.ImageService = ImageService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(image_entity_1.Image)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ImageService);
//# sourceMappingURL=image.service.js.map