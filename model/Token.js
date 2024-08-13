import mongoose from "mongoose";

const TokenSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is Required."],
    trim: true,
  },
  token: {
    type: String,
    required: [true, "Token is Required."],
    trim: true,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

export const Token =
  mongoose.models?.Token || mongoose.model("Token", TokenSchema);
