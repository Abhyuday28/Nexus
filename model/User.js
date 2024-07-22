import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First Name is Required."],
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  roll: {
    type: String,
    required: [true, "Roll Number is Required."],
    unique: true,
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
    unique: true,
  },
  branch: {
    type: String,
    required: [true, "Branch is Required."],
  },
  password: {
    type: String,
    required: [true, "Password is Required."],
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
