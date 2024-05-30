"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeModule = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const typeorm_1 = require("@nestjs/typeorm");
const home_entity_1 = require("./entities/home.entity");
const home_controller_1 = require("./home.controller");
const home_service_1 = require("./home.service");
let HomeModule = exports.HomeModule = class HomeModule {
};
exports.HomeModule = HomeModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([home_entity_1.Home]), axios_1.HttpModule],
        controllers: [home_controller_1.HomeController],
        providers: [home_service_1.HomeService],
    })
], HomeModule);
//# sourceMappingURL=home.module.js.map