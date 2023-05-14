import mongoose from "mongoose";

export const ActivitySchema = new mongoose.Schema({
  activity: { type: String, default: null },
  type: { type: String, default: null },
  participants: { type: Number, default: 0 },
  price: { type: Number, default: 0 },
  link: { type: String, default: null },
  key: { type: String, default: null },
  accessibility: { type: Number, default: 0 },
});