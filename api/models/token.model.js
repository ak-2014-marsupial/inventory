"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const user_model_1 = require("./user.model");
const { Schema } = mongoose_1.default;
const tokenSchema = new Schema({
    accessToken: { type: String, required: true },
    refreshToken: { type: String, required: true },
    _userId: { type: Schema.Types.ObjectId, required: true, ref: user_model_1.User },
}, {
    timestamps: true,
    versionKey: false,
});
exports.Token = mongoose_1.default.model("tokens", tokenSchema);
//# sourceMappingURL=token.model.js.map