"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageModule = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const typeorm_1 = require("@nestjs/typeorm");
const platform_express_1 = require("@nestjs/platform-express");
const image_multer_config_1 = require("./image.multer.config");
const image_entity_1 = require("./entities/image.entity");
const image_controller_1 = require("./image.controller");
const image_service_1 = require("./image.service");
let ImageModule = exports.ImageModule = class ImageModule {
};
exports.ImageModule = ImageModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([image_entity_1.Image]),
            axios_1.HttpModule,
            platform_express_1.MulterModule.register(image_multer_config_1.multerOptions),
        ],
        controllers: [image_controller_1.ImageController],
        providers: [image_service_1.ImageService],
    })
], ImageModule);
//# sourceMappingURL=image.module.js.map