"use server";
import { dbConnect } from "@/lib/connection";
import { College } from "@/model/College";
import { Faculty } from "@/model/Faculty";
import { Token } from "@/model/Token";
import { User } from "@/model/User";
import { facultySignupSchema, signupSchema } from "@/schema/zodSchema";
import { v4 as uuidv4 } from "uuid";
import { sendSignupOTP } from "./verification";

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

      let year;
      if (isLE) {
        year =
          Math.floor(new Date().getFullYear() / 100) * 100 +
          Math.floor(registration / 1000000000) -
          1;
      } else {
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
        roll,
        email,
        isLE,
        batch: year,
        registration,
        branch,
        college: college?._id,
      });

      const otp = Math.floor(100000 + Math.random() * 900000);
      const token = await Token.create({ email, token: uuidv4(), otp });

      const res = await sendSignupOTP({ to: email, otp });
      if (res.success) res.token = token.token;
      return res;
    }
  } catch (error) {
    return {
      message: error.message,
      success: false,
      type: "error",
    };
  }
};

export const facultySignup = async (data) => {
  try {
    const validatedData = facultySignupSchema.safeParse(data);

    if (validatedData.error) {
      return {
        message: "Invalid input fields. Please check all fields any try again.",
        success: false,
        type: "error",
      };
    }
    if (validatedData.success) {
      const { firstName, lastName, password, email } = validatedData.data;

      const existingUser = await Faculty.findOne({ email });

      if (existingUser)
        return {
          message: "You are already registered. please login.",
          success: false,
          type: "error",
        };

      const newUser = await Faculty.create({
        firstName,
        lastName,
        password,
        email,
      });

      const otp = Math.floor(100000 + Math.random() * 900000);
      const token = await Token.create({ email, token: uuidv4(), otp });

      const res = await sendSignupOTP({ to: email, otp });
      if (res.success) res.token = token.token;
      return res;
    }
  } catch (error) {
    return {
      message: error.message,
      success: false,
      type: "error",
    };
  }
};

export const verifyOtp = async ({ token, otp }) => {
  try {
    const validToken = await Token.findOne({ token, otp });

    console.log(token, otp);
    if (!validToken)
      return {
        message: "Invalid OTP.",
        success: false,
        type: "error",
      };

    const userType = (await User.findOne({ email: validToken.email }))
      ? "user"
      : "faculty";

    userType === "user"
      ? await User.updateOne(
          { email: validToken.email },
          { $set: { emailVerified: true } }
        )
      : await Faculty.updateOne(
          { email: validToken.email },
          { $set: { emailVerified: true } }
        );

    await Token.deleteOne({
      $and: [
        { email: validToken.email },
        { otp: validToken.otp },
        { token: validToken.token },
      ],
    });

    return {
      message: "OTP Verified.",
      success: true,
      type: "success",
    };
  } catch (error) {
    return {
      message: error.message,
      success: false,
      type: "error",
    };
  }
};
