"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    SERVICE_CONFIG: {
        port: 3000,
    },
    DATABASE_CONFIG: {
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'liuziyi5211314',
        database: 'yr-uniapp',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
    },
};
//# sourceMappingURL=env.development.js.map