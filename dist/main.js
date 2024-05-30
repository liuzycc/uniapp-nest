"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const allFilter_1 = require("./filters/allFilter");
const allTransform_1 = require("./transform/allTransform");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    app.useGlobalFilters(new allFilter_1.AnyExceptionFilter());
    app.useGlobalInterceptors(new allTransform_1.TransformInterceptor());
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map