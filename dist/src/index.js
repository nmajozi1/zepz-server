"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_json_1 = __importDefault(require("../config/config.json"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const activity_route_1 = __importDefault(require("./routes/activity.route"));
const db_server_1 = __importDefault(require("./db/db-server"));
const app = (0, express_1.default)();
(0, db_server_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(activity_route_1.default);
app.listen(config_json_1.default.port, () => console.log(config_json_1.default.port));
