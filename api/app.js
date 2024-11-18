"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const config_1 = require("./configs/config");
const auth_router_1 = require("./routers/auth.router");
const user_router_1 = require("./routers/user.router");
const connectionDb_1 = __importDefault(require("./configs/connectionDb"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: function (origin, callback) {
        if (!origin || config_1.configs.ALLOWED_ORIGINS.indexOf(origin) !== -1) {
            callback(null, origin);
        }
        else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/auth", auth_router_1.authRouter);
app.use("/users", user_router_1.userRouter);
app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "default-src 'self'; script-src 'self' https://vercel.live https://*.vercel.app; connect-src 'self' https://vercel.live https://*.vercel.app");
    next();
});
app.use("*", (err, req, res, next) => {
    return res.status(err?.status || 500).json({
        message: err?.message,
        status: err?.status
    });
});
(0, connectionDb_1.default)().then();
const PORT = config_1.configs.PORT;
if (PORT) {
    app.listen(PORT, () => {
        console.log(`Server has started on PORT ${PORT}`);
    });
}
module.exports = app;
//# sourceMappingURL=app.js.map