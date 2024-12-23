"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const common_middleware_1 = require("../middlewares/common.middleware");
const user_validator_1 = require("../validators/user.validator");
const router = (0, express_1.Router)();
router.get("/", user_controller_1.userController.getList);
router.get("/me", auth_middleware_1.authMiddleware.checkAccessToken, user_controller_1.userController.getMe);
router.put("/me", auth_middleware_1.authMiddleware.checkAccessToken, common_middleware_1.commonMiddleware.isBodyValid(user_validator_1.UserValidator.updateUser), user_controller_1.userController.updateMe);
router.delete("/me", auth_middleware_1.authMiddleware.checkAccessToken, user_controller_1.userController.deleteMe);
router.get("/:userId", common_middleware_1.commonMiddleware.isIdValid("userId"), user_controller_1.userController.getById);
exports.userRouter = router;
//# sourceMappingURL=user.router.js.map