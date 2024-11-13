"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commonMiddleware = void 0;
const mongoose_1 = require("mongoose");
class CommonMiddleware {
    isIdValid(req, res, next) {
        try {
            const id = req.params.id;
            if (!(0, mongoose_1.isObjectIdOrHexString)(id)) {
                throw new Error("wrong ID param");
            }
            next();
        }
        catch (e) {
            next(e);
        }
    }
}
exports.commonMiddleware = new CommonMiddleware();
//# sourceMappingURL=common.middleware.js.map