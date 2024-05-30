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
exports.DemoController = void 0;
const common_1 = require("@nestjs/common");
const demo_dot_1 = require("./dot/demo.dot");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const demo_entities_1 = require("./entities/demo.entities");
let DemoController = exports.DemoController = class DemoController {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    findAll(request) {
        console.log(request.query);
        return 'This action returns all cats';
    }
    async create(createCatDto) {
        console.log('[createCatDto]:', createCatDto);
        const temp = await this.usersRepository.query('SELECT * FROM demo');
        console.log('[我是数据库中的内容]：', temp);
        if (!createCatDto.value) {
            throw new common_1.HttpException('我报错了啊啊啊', common_1.HttpStatus.BAD_REQUEST);
        }
        return '我成功了哈';
    }
};
__decorate([
    (0, common_1.Get)('/icc'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], DemoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('/mypost'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [demo_dot_1.CreateDemoDto]),
    __metadata("design:returntype", Promise)
], DemoController.prototype, "create", null);
exports.DemoController = DemoController = __decorate([
    (0, common_1.Controller)('demo'),
    __param(0, (0, typeorm_1.InjectRepository)(demo_entities_1.Demo)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DemoController);
//# sourceMappingURL=demo.controller.js.map