"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authService = void 0;
const token_repository_1 = require("../repositories/token.repository");
const user_repository_1 = require("../repositories/user.repository");
const password_service_1 = require("./password.service");
const token_service_1 = require("./token.service");
const api_error_1 = require("../errors/api.error");
class AuthService {
    async signUp(dto) {
        await this.isEmailExist(dto.email);
        const password = await password_service_1.passwordService.hashPassword(dto.password);
        const user = await user_repository_1.userRepository.create({ ...dto, password });
        const tokens = await token_service_1.tokenService.generatePair({
            userId: user._id,
            role: user.role
        });
        await token_repository_1.tokenRepository.create({ ...tokens, _userId: user._id });
        return { user, tokens };
    }
    async signIn(dto) {
        const user = await user_repository_1.userRepository.getByParams({ email: dto.email });
        if (!user) {
            throw new api_error_1.ApiError("Invalid credentials", 401);
        }
        const isPasswordCorrect = await password_service_1.passwordService.comparePassword(dto.password, user.password);
        if (!isPasswordCorrect) {
            throw new api_error_1.ApiError("Invalid credentials", 401);
        }
        const tokens = await token_service_1.tokenService.generatePair({
            userId: user._id,
            role: user.role
        });
        await token_repository_1.tokenRepository.create({ ...tokens, _userId: user._id });
        return { user, tokens };
    }
    async refresh(payload, oldTokenId) {
        const tokens = await token_service_1.tokenService.generatePair({
            userId: payload.userId,
            role: payload.role
        });
        await token_repository_1.tokenRepository.create({ ...tokens, _userId: payload.userId });
        await token_repository_1.tokenRepository.deleteById(oldTokenId);
        return tokens;
    }
    async logout(payload, tokenId) {
        await token_repository_1.tokenRepository.deleteById(tokenId);
    }
    async logoutAll(payload) {
        await token_repository_1.tokenRepository.deleteByParams({ _userId: payload.userId });
    }
    async isEmailExist(email) {
        const user = await user_repository_1.userRepository.getByParams({ email });
        if (user) {
            throw new api_error_1.ApiError("Email already exists", 409);
        }
    }
}
exports.authService = new AuthService();
//# sourceMappingURL=auth.service.js.map