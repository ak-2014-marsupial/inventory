"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const auth_service_1 = require("../services/auth.service");
class AuthController {
    async signUp(req, res, next) {
        try {
            const dto = req.body;
            const result = await auth_service_1.authService.signUp(dto);
            res.status(201).json(result);
        }
        catch (e) {
            next(e);
        }
    }
    async signIn(req, res, next) {
        const dto = req.body;
        try {
            const result = await auth_service_1.authService.signIn(dto);
            res.status(201).json(result);
        }
        catch (e) {
            next(e);
        }
    }
    async refresh(req, res, next) {
        try {
            const jwtPayload = req.res.locals.jwtPayload;
            const oldTokensId = req.res.locals.oldTokensId;
            const result = await auth_service_1.authService.refresh(jwtPayload, oldTokensId);
            res.status(201).json(result);
        }
        catch (e) {
            next(e);
        }
    }
    async logout(req, res, next) {
        try {
            const jwtPayload = req.res.locals.jwtPayload;
            const tokenId = req.res.locals.tokenId;
            await auth_service_1.authService.logout(jwtPayload, tokenId);
            res.sendStatus(204);
        }
        catch (e) {
            next(e);
        }
    }
    async logoutAll(req, res, next) {
        try {
            const jwtPayload = req.res.locals.jwtPayload;
            await auth_service_1.authService.logoutAll(jwtPayload);
            res.sendStatus(204);
        }
        catch (e) {
            next(e);
        }
    }
}
exports.authController = new AuthController();
//# sourceMappingURL=auth.controller.js.map