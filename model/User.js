import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First Name is Required."],
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
  },
  roll: {
    type: String,
    required: [true, "Roll Number is Required."],
    trim: true,
    unique: true,
  },
  image: {
    type: String,
    trim: true,
  },
  isLE: {
    type: Boolean,
    default: false,
  },
  batch: {
    type: Number,
    required: [true, "Batch is Required."],
  },
  registration: {
    type: Number,
    required: [true, "Registration number is Required."],
    unique: true,
  },
  branch: {
    type: String,
    required: [true, "Branch is Required."],
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Password is Required."],
  },
  role: {
    type: String,
    enum: ["Faculty", "Student", "Admin"],
    default: "Student",
  },
  isOnline: {
    type: Boolean,
    default: false,
  },
  college: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "College",
  },
});

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) next();

  // Hash the Password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(this.password, salt);
  this.password = hashedPassword;
});

export const User = mongoose.models?.User || mongoose.model("User", UserSchema);
