"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidator = void 0;
const joi_1 = __importDefault(require("joi"));
const regex_constant_1 = require("../constants/regex.constant");
class UserValidator {
}
exports.UserValidator = UserValidator;
_a = UserValidator;
UserValidator._name = joi_1.default.string().min(3).trim();
UserValidator.age = joi_1.default.number().min(15).max(50);
UserValidator.email = joi_1.default
    .string()
    .lowercase()
    .regex(regex_constant_1.regexConstant.EMAIL)
    .trim();
UserValidator.password = joi_1.default.string().regex(regex_constant_1.regexConstant.PASSWORD).trim();
UserValidator.phone = joi_1.default.string().regex(regex_constant_1.regexConstant.PHONE).trim();
UserValidator.createUser = joi_1.default.object({
    name: _a._name.required(),
    age: _a.age.required(),
    email: _a.email.required(),
    password: _a.password.required(),
});
UserValidator.updateUser = joi_1.default.object({
    name: _a._name,
    age: _a.age,
    email: _a.email,
    phone: _a.phone,
});
UserValidator.login = joi_1.default.object({
    email: _a.email.required(),
    password: _a.password.required(),
});
//# sourceMappingURL=user.validator.js.map