"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const cats_controller_1 = require("./cats/cats.controller");
const demo_controller_1 = require("./modules/demo/demo.controller");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("./config");
const demo_entities_1 = require("./modules/demo/entities/demo.entities");
const users_module_1 = require("./modules/users/users.module");
const product_module_1 = require("./modules/product/product.module");
const sort_module_1 = require("./modules/sort/sort.module");
const shop_module_1 = require("./modules/shop/shop.module");
const image_module_1 = require("./modules/image/image.module");
const car_module_1 = require("./modules/car/car.module");
const mail_module_1 = require("./modules/mail/mail.module");
const home_module_1 = require("./modules/home/home.module");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(process.cwd(), '../uploadImageList'),
            }),
            typeorm_1.TypeOrmModule.forRoot(config_1.env.DATABASE_CONFIG),
            typeorm_1.TypeOrmModule.forFeature([demo_entities_1.Demo]),
            users_module_1.UsersModule,
            product_module_1.ProductModule,
            sort_module_1.SortModule,
            shop_module_1.ShopModule,
            image_module_1.ImageModule,
            car_module_1.CarModule,
            mail_module_1.MailModule,
            home_module_1.HomeModule,
        ],
        controllers: [app_controller_1.AppController, cats_controller_1.CatsController, demo_controller_1.DemoController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map