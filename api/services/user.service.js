"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const user_repository_1 = require("../repositories/user.repository");
class UserService {
    async getList() {
        return await user_repository_1.userRepository.getList();
    }
    async getById(userId) {
        return await user_repository_1.userRepository.getById(userId);
    }
    async getMe(userId) {
        return await user_repository_1.userRepository.getById(userId);
    }
    async updateMe(userId, dto) {
        return await user_repository_1.userRepository.updateById(userId, dto);
    }
    async deleteMe(userId) {
        await user_repository_1.userRepository.deleteById(userId);
    }
}
exports.userService = new UserService();
//# sourceMappingURL=user.service.js.map