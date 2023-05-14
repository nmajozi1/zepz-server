"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteActivities = exports.getActivity = exports.listActivity = exports.getRandomActivities = exports.createActivity = void 0;
const axios_1 = __importDefault(require("axios"));
const config_json_1 = require("../../config/config.json");
const activity_model_1 = require("../db/activity.model");
const createActivity = (activityList) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield activity_model_1.ActivityModel.insertMany(activityList);
    }
    catch (error) {
        throw new Error('Unable to create the activity');
    }
});
exports.createActivity = createActivity;
const getRandomActivities = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const activities = [];
        for (let x = 0; x < 20; x++) {
            activities.push(axios_1.default.get(config_json_1.url));
        }
        const responses = yield Promise.all(activities);
        return responses.map(response => response.data);
    }
    catch (error) {
        throw new Error('Unable to retrieve the activity');
    }
});
exports.getRandomActivities = getRandomActivities;
const listActivity = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield activity_model_1.ActivityModel.find();
    }
    catch (error) {
        throw new Error('Unable to retrieve the list of activities');
    }
});
exports.listActivity = listActivity;
const getActivity = (type) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const activity = yield activity_model_1.ActivityModel.find({ type });
        if (activity.length < 1)
            throw new Error(`Activity of type ${type} not found.`);
        return activity;
    }
    catch (error) {
        throw new Error(`Activity of type ${type} not found.`);
    }
});
exports.getActivity = getActivity;
const deleteActivities = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield activity_model_1.ActivityModel.deleteMany({});
    }
    catch (error) {
        throw new Error('Unable to delete the activities');
    }
});
exports.deleteActivities = deleteActivities;
