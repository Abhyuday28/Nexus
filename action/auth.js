"use server";
import { dbConnect } from "@/lib/connection";
import { College } from "@/model/College";
import { User } from "@/model/User";
import { signupSchema } from "@/schema/zodSchema";

dbConnect();

export const signup = async (data) => {
  try {
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

      const isLE = data.registration.slice(8, 9) === "9";

      const branchVal = {
        101: "CIVIL",
        102: "MECH",
        103: "EE",
        105: "CSE",
        110: "EEE",
      };

      let rollno, year;
      if (isLE) {
        rollno = parseInt(
          roll
            .split("")
            .filter((char) => !isNaN(char) && char !== " ")
            .join("")
        );

        year =
          Math.floor(new Date().getFullYear() / 100) * 100 +
          Math.floor(registration / 1000000000) -
          1;
      } else {
        rollno = parseInt(roll);
        year =
          Math.floor(new Date().getFullYear() / 100) * 100 +
          Math.floor(registration / 1000000000);
      }

      const branch = branchVal[Math.floor(registration.slice(2, 5))];

      const collegeCode = registration?.toString().slice(5, 8);

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
  } catch {
    return {
      message: error.message,
      success: false,
      type: "error",
    };
  }
};
