import mongoose from "mongoose";
import { ActivitySchema } from "./activity.schema";

export const ActivityModel = mongoose.model('Activity', ActivitySchema);