"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearActivitiesController = exports.fetchActivity = exports.listActivityController = exports.createActivityController = void 0;
const activityService = __importStar(require("../services/activity.service"));
const createActivityController = ({}, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield activityService.deleteActivities();
        const activityList = yield activityService.getRandomActivities();
        if (!activityList)
            return res.status(404).send("Error getting the list of activities.");
        const activity = yield activityService.createActivity(activityList);
        res.status(200).send(activity);
    }
    catch (error) {
        console.log("Error creating the activities: ", error);
        res.status(500).send(`${error}`);
    }
});
exports.createActivityController = createActivityController;
const listActivityController = ({}, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const activity = yield activityService.listActivity();
        res.status(200).send(activity);
    }
    catch (error) {
        console.log("Error getting the list of activities: ", error);
        res.status(500).send(`${error}`);
    }
});
exports.listActivityController = listActivityController;
const fetchActivity = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { type } = req.query;
        const activity = yield activityService.getActivity(type);
        res.status(200).send(activity);
    }
    catch (error) {
        console.error(error);
        res.status(500).send(`${error}`);
    }
});
exports.fetchActivity = fetchActivity;
const clearActivitiesController = ({}, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield activityService.deleteActivities();
        res.status(200).send(yield activityService.listActivity());
    }
    catch (error) {
        console.log("Error deleting activities: ", error);
        res.status(500).send(`${error}`);
    }
});
exports.clearActivitiesController = clearActivitiesController;
