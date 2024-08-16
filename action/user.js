"use server";
import { dbConnect } from "@/lib/connection";
import { Faculty } from "@/model/Faculty";
import { User } from "@/model/User";

dbConnect();
export const getStudents = async () => {
  try {
    const users = await User.find();
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

export const getFaculty = async () => {
  try {
    const users = await Faculty.find();
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
