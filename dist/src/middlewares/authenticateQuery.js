"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const authMiddleware = (req, res, next) => {
    const { type } = req.query;
    if (!type)
        return res.status(500).send("The activity type has not been provided.");
    next();
};
exports.authMiddleware = authMiddleware;
