"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configs = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.configs = {
    DB_URL: process.env.DB_URL,
    PORT: process.env.PORT,
};
//# sourceMappingURL=config.js.map