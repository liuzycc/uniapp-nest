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
exports.CatsController = void 0;
const common_1 = require("@nestjs/common");
const cats_dto_1 = require("./cats.dto");
let CatsController = exports.CatsController = class CatsController {
    findAll(request) {
        console.log(request.query);
        return 'This action returns all cats';
    }
    async create(createCatDto) {
        console.log('[createCatDto]:', createCatDto);
        if (!createCatDto.age) {
            throw new common_1.HttpException('我报错了啊啊啊', common_1.HttpStatus.BAD_REQUEST);
        }
        return 'This action adds a new cat';
    }
};
__decorate([
    (0, common_1.Get)('/icc'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], CatsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('/mypost'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cats_dto_1.CreateCatDto]),
    __metadata("design:returntype", Promise)
], CatsController.prototype, "create", null);
exports.CatsController = CatsController = __decorate([
    (0, common_1.Controller)('cats')
], CatsController);
//# sourceMappingURL=cats.controller.js.map