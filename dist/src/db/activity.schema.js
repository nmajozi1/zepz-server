"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivitySchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.ActivitySchema = new mongoose_1.default.Schema({
    activity: { type: String, default: null },
    type: { type: String, default: null },
    participants: { type: Number, default: 0 },
    price: { type: Number, default: 0 },
    link: { type: String, default: null },
    key: { type: String, default: null },
    accessibility: { type: Number, default: 0 },
});
