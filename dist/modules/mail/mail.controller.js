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
exports.MailController = void 0;
const common_1 = require("@nestjs/common");
const nodemailer = require("nodemailer");
let MailController = exports.MailController = class MailController {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: 'smtp.163.com',
            port: 465,
            secure: true,
            auth: {
                user: 'liuziyicc0118@163.com',
                pass: 'KRWTMMPZRPFLDMNT',
            },
        });
    }
    async send(info) {
        const { to, title, htmlContent } = info;
        const res = await this.sendMail(to, title, htmlContent);
        return res;
    }
    async sendMail(to, subject, content) {
        const mailOptions = {
            from: 'liuziyicc0118@163.com',
            to: to,
            subject: subject,
            html: content,
        };
        const info = await this.transporter.sendMail(mailOptions);
        return info;
    }
};
__decorate([
    (0, common_1.Get)('/send'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MailController.prototype, "send", null);
exports.MailController = MailController = __decorate([
    (0, common_1.Controller)('mail'),
    __metadata("design:paramtypes", [])
], MailController);
//# sourceMappingURL=mail.controller.js.map