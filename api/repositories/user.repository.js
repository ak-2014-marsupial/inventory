"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRepository = void 0;
const user_model_1 = require("../models/user.model");
class UserRepository {
    async getByParams(params) {
        return user_model_1.User.findOne(params);
    }
    async getList() {
        return user_model_1.User.find();
    }
    async create(dto) {
        return await user_model_1.User.create(dto);
    }
    async getById(userId) {
        return user_model_1.User.findById(userId);
    }
    async updateById(userId, dto) {
        return user_model_1.User.findByIdAndUpdate(userId, dto, {
            returnDocument: "after",
        });
    }
    async deleteById(userId) {
        await user_model_1.User.deleteOne({ _id: userId });
    }
}
exports.userRepository = new UserRepository();
//# sourceMappingURL=user.repository.js.map