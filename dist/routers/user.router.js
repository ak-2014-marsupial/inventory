"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const common_middleware_1 = require("../middlewares/common.middleware");
const router = (0, express_1.Router)();
router.get("", user_controller_1.userController.getAll);
router.get("/:id", common_middleware_1.commonMiddleware.isIdValid, user_controller_1.userController.getById);
router.put("/:id", common_middleware_1.commonMiddleware.isIdValid, user_controller_1.userController.updateById);
router.delete("/:id", common_middleware_1.commonMiddleware.isIdValid, user_controller_1.userController.deleteById);
exports.userRouter = router;
//# sourceMappingURL=user.router.js.map