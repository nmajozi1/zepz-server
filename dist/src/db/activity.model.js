"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const activity_schema_1 = require("./activity.schema");
exports.ActivityModel = mongoose_1.default.model('Activity', activity_schema_1.ActivitySchema);
