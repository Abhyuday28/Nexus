"use server";
import { dbConnect } from "@/lib/connection";
import { College } from "@/model/College";
import { User } from "@/model/User";
import { signupSchema } from "@/schema/zodSchema";

dbConnect();

export const signup = async (data) => {
  const validatedData = signupSchema.safeParse(data);

  if (validatedData.error) {
    return {
      message: "Invalid input fields. Please check all fields any try again.",
      success: false,
      type: "error",
    };
  }
  if (validatedData.success) {
    const { firstName, lastName, password, roll, email, registration } =
      validatedData.data;

    const existingUser = await User.findOne({
      $or: [{ roll }, { email }],
    });

    if (existingUser)
      return {
        message: "You are already registered. please login.",
        success: false,
        type: "error",
      };

    const isLE =
      data.roll.includes("le") ||
      data.roll.includes("Le") ||
      data.roll.includes("LE") ||
      data.roll.includes("lE");

    const branchVal = {
      3: "CSE",
      1: "EEE",
      2: "MECH",
      4: "CIVIL",
    };

    let rollno, year;
    if (isLE) {
      rollno = Math.abs(parseInt(data.roll.slice(2)));

      year =
        Math.floor(new Date().getFullYear() / 100) * 100 +
        Math.floor(rollno / 1000) -
        1;
    } else {
      rollno = parseInt(data.roll);
      year =
        Math.floor(new Date().getFullYear() / 100) * 100 +
        Math.floor(rollno / 1000);
    }
    
    const branch = branchVal[Math.floor((rollno / 100) % 10)];

    const collegeCode = registration?.toString().slice(5, 8) || null;

    const college = await College.findOne({ code: parseInt(collegeCode) });

    const newUser = await User.create({
      firstName,
      lastName,
      password,
      roll: rollno,
      email,
      isLE,
      batch: year,
      registration,
      branch,
      college: college?._id,
    });

    return {
      message: "Signup Successfull.",
      success: true,
      type: "success",
    };
  }
};
