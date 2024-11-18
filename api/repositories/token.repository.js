"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenRepository = void 0;
const token_model_1 = require("../models/token.model");
class TokenRepository {
    async create(dto) {
        return await token_model_1.Token.create(dto);
    }
    async findByParams(params) {
        return token_model_1.Token.findOne(params);
    }
    async deleteById(id) {
        await token_model_1.Token.deleteOne({ _id: id });
    }
    async deleteByParams(params) {
        await token_model_1.Token.deleteMany(params);
    }
}
exports.tokenRepository = new TokenRepository();
//# sourceMappingURL=token.repository.js.map