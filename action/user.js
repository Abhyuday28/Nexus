"use server";
import { dbConnect } from "@/lib/connection";
import { User } from "@/model/User";

dbConnect();
export const getUsers = async () => {
  try {
    const users = await User.find({ role: "Student" });
    return {
      data: users,
      message: "Users fetched Successfully",
      success: true,
      type: "success",
    };
  } catch (error) {
    return {
      data: [],
      message: error.message,
      success: false,
      type: "error",
    };
  }
};
