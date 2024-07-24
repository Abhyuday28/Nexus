import mongoose from "mongoose";

const CollegeSchema = new mongoose.Schema({
  code: {
    unique: true,
    type: Number,
    required: [true, "College code is required."],
  },
  name: {
    type: String,
    required: [true, "College name is required."],
  },
  logo: {
    type: String,
    required: [true, "College logo is required."],
  },
});

export const College =
  mongoose.models?.College || mongoose.model("College", CollegeSchema);
