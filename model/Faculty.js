import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const FacultySchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First Name is Required."],
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
  emailVerified: {
    type: Boolean,
    default: false,
  },
  email: {
    type: String,
    required: [true, "Email is Required."],
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is Required."],
  },
});

FacultySchema.pre("save", async function (next) {
  if (!this.isModified("password")) next();

  // Hash the Password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(this.password, salt);
  this.password = hashedPassword;
});

export const Faculty =
  mongoose.models?.Faculty || mongoose.model("Faculty", FacultySchema);
