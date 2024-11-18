"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const user_service_1 = require("../services/user.service");
class UserController {
    async getList(req, res, next) {
        try {
            const result = await user_service_1.userService.getList();
            res.json(result);
        }
        catch (e) {
            next(e);
        }
    }
    async getById(req, res, next) {
        try {
            const userId = req.params.userId;
            const result = await user_service_1.userService.getById(userId);
            res.json(result);
        }
        catch (e) {
            next(e);
        }
    }
    async getMe(req, res, next) {
        try {
            const userId = req.res.locals.jwtPayload.userId;
            const result = await user_service_1.userService.getMe(userId);
            res.json(result);
        }
        catch (e) {
            next(e);
        }
    }
    async updateMe(req, res, next) {
        try {
            const userId = req.res.locals.jwtPayload.userId;
            const dto = req.body;
            const result = await user_service_1.userService.updateMe(userId, dto);
            res.status(201).json(result);
        }
        catch (e) {
            next(e);
        }
    }
    async deleteMe(req, res, next) {
        try {
            const userId = req.res.locals.jwtPayload.userId;
            await user_service_1.userService.deleteMe(userId);
            res.sendStatus(204);
        }
        catch (e) {
            next(e);
        }
    }
}
exports.userController = new UserController();
//# sourceMappingURL=user.controller.js.map