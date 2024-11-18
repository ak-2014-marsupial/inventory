"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connectDB = async () => {
    try {
        const dbConnection = await mongoose_1.default.connect(process.env.DB_URL);
        console.log(`MongoDB connected:${dbConnection.connection.host}:${dbConnection.connection.port}/${dbConnection.connection.name}`);
    }
    catch (error) {
        console.log(error.message);
    }
};
exports.default = connectDB;
//# sourceMappingURL=connectionDb.js.map