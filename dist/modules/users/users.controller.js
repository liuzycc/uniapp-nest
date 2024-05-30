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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const users_service_1 = require("./users.service");
const users_dot_1 = require("./dot/users.dot");
let UsersController = exports.UsersController = class UsersController {
    constructor(userService, httpService) {
        this.userService = userService;
        this.httpService = httpService;
    }
    async findAll(findUserInfo) {
        const res = await this.userService.findAll(findUserInfo);
        return res;
    }
    async createUser(createUser) {
        const { address, name, code } = createUser;
        const wxconfig = (await this.userService.getWxconfig());
        const { grant_type, appid, secret, access_token_time } = wxconfig;
        let { access_token } = wxconfig;
        const date = new Date().getTime();
        if (!access_token || !access_token_time || date - access_token_time > 0) {
            const { data: wxTokenInfo } = (await this.httpService
                .get(`https://api.weixin.qq.com/cgi-bin/stable_token?grant_type=${grant_type}&appid=${appid}&secret=${secret}`)
                .toPromise());
            console.log(wxTokenInfo);
            await this.userService.upDateAccessToken({
                access_token: wxTokenInfo.access_token,
                access_token_time: new Date().getTime() + wxTokenInfo.expires_in * 1000 + '',
            });
            access_token = wxTokenInfo.access_token;
        }
        const wxInfo = (await this.httpService
            .get(`https://api.weixin.qq.com/sns/jscode2session?js_code=${code}&appid=${appid}&secret=${secret}&grant_type=authorization_code`)
            .toPromise());
        if (wxInfo.data.openid) {
            let user = await this.userService.findOne(wxInfo.data.openid);
            if (!user) {
                const res = await this.userService.create(wxInfo.data.openid);
                res && (user = { openid: wxInfo.data.openid });
            }
            return user;
        }
        else {
            throw new common_1.HttpException('获取openId失败', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async UpdateUser(user) {
        const { openid } = user;
        if (!openid) {
            throw new common_1.HttpException('缺少必填字段', common_1.HttpStatus.BAD_REQUEST);
        }
        const res = await this.userService.update(user);
        return res;
    }
    async cc() {
        return {
            abc: 'iioo',
        };
    }
};
__decorate([
    (0, common_1.Get)('/list'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createUser", null);
__decorate([
    (0, common_1.Post)('/update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [users_dot_1.UsersDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "UpdateUser", null);
__decorate([
    (0, common_1.Get)('/cc'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "cc", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        axios_1.HttpService])
], UsersController);
//# sourceMappingURL=users.controller.js.map