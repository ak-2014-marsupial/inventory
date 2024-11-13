"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const user_service_1 = require("../services/user.service");
class UserController {
    async getAll(req, res, next) {
        try {
            const users = await user_service_1.userService.getAll();
            return res.json({ data: users });
        }
        catch (e) {
            next(e);
        }
    }
    async getById(req, res, next) {
        try {
            const id = req.params.id;
            const user = await user_service_1.userService.getById(id);
            res.json({ data: user });
        }
        catch (e) {
            next(e);
        }
    }
    async updateById(req, res, next) {
        try {
            const id = req.params.id;
            const body = req.body;
            const user = await user_service_1.userService.updateById(id, body);
            res.status(201).json(user);
        }
        catch (e) {
            next(e);
        }
    }
    async deleteById(req, res, next) {
        try {
            const id = req.params.id;
            await user_service_1.userService.deleteById(id);
            res.sendStatus(204);
        }
        catch (e) {
            next(e);
        }
    }
}
exports.userController = new UserController();
//# sourceMappingURL=user.controller.js.map