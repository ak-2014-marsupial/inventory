"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const common_middleware_1 = require("../middlewares/common.middleware");
const user_validator_1 = require("../validators/user.validator");
const router = (0, express_1.Router)();
router.post("/sign-up", common_middleware_1.commonMiddleware.isBodyValid(user_validator_1.UserValidator.createUser), auth_controller_1.authController.signUp);
router.post("/sign-in", common_middleware_1.commonMiddleware.isBodyValid(user_validator_1.UserValidator.login), auth_controller_1.authController.signIn);
router.post("/refresh", auth_middleware_1.authMiddleware.checkRefreshToken, auth_controller_1.authController.refresh);
router.post("/logout", auth_middleware_1.authMiddleware.checkAccessToken, auth_controller_1.authController.logout);
router.post("/logout-all", auth_middleware_1.authMiddleware.checkAccessToken, auth_controller_1.authController.logoutAll);
exports.authRouter = router;
//# sourceMappingURL=auth.router.js.map