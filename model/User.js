import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First Name is Required."],
  },
  lastName: {
    type: String,
  },
  roll: {
    type: Number,
    min: [5, "Invalid Roll Number"],
    max: [5, "Invalid Roll Number"],
    required: [true, "Roll Number is Required."],
  },
  registration: {
    type: Number,
  },
  password: {
    type: String,
    required: [true, "Password is Required."],
  },
  isOnline: {
    type: Boolean,
    default: false,
  },
});

export const User = mongoose.models?.User || mongoose.model("User", UserSchema);
