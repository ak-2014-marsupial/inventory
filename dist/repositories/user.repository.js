"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRepository = void 0;
const user_model_1 = require("../models/user.model");
class UserRepository {
    async getAll() {
        return await user_model_1.User.find({});
    }
    async getById(id) {
        return user_model_1.User.findOne({ _id: id });
    }
    async updateById(id, body) {
        return user_model_1.User.findByIdAndUpdate(id, body, { returnDocument: "after" });
    }
    async create(body) {
        return await user_model_1.User.create(body);
    }
    async deleteById(id) {
        await user_model_1.User.deleteOne({ _id: id });
    }
}
exports.userRepository = new UserRepository();
//# sourceMappingURL=user.repository.js.map