"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const env_development_1 = require("./env.development");
const env_production_1 = require("./env.production");
const configs = {
    development: env_development_1.default,
    production: env_production_1.default,
};
const env = configs[process.env.NODE_ENV || 'development'];
exports.env = env;
//# sourceMappingURL=index.js.map