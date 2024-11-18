"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const token_type_enum_1 = require("../enums/token-type.enum");
const token_repository_1 = require("../repositories/token.repository");
const token_service_1 = require("../services/token.service");
const api_error_1 = require("../errors/api.error");
class AuthMiddleware {
    async checkAccessToken(req, res, next) {
        try {
            const header = req.headers.authorization;
            if (!header) {
                throw new api_error_1.ApiError("Token is not provided", 401);
            }
            const accessToken = header.split("Bearer ")[1];
            const payload = token_service_1.tokenService.checkToken(accessToken, token_type_enum_1.TokenTypeEnum.ACCESS);
            const pair = await token_repository_1.tokenRepository.findByParams({ accessToken });
            if (!pair) {
                throw new api_error_1.ApiError("Token is not valid", 401);
            }
            req.res.locals.tokenId = pair._id;
            req.res.locals.jwtPayload = payload;
            next();
        }
        catch (e) {
            next(e);
        }
    }
    async checkRefreshToken(req, res, next) {
        try {
            const header = req.headers.authorization;
            if (!header) {
                throw new api_error_1.ApiError("Token is not provided", 401);
            }
            const refreshToken = header.split("Bearer ")[1];
            const payload = token_service_1.tokenService.checkToken(refreshToken, token_type_enum_1.TokenTypeEnum.REFRESH);
            const pair = await token_repository_1.tokenRepository.findByParams({ refreshToken });
            if (!pair) {
                throw new api_error_1.ApiError("Token is not valid", 401);
            }
            req.res.locals.jwtPayload = payload;
            req.res.locals.oldTokensId = pair._id;
            next();
        }
        catch (e) {
            next(e);
        }
    }
}
exports.authMiddleware = new AuthMiddleware();
//# sourceMappingURL=auth.middleware.js.map