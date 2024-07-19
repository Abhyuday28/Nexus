import { connect_db } from "@/lib/db";
import { User } from "@/model/User";
import { signupSchema } from "@/schema/zodSchema";

connect_db();

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
  }

  await User.create({
    firstName,
    lastName,
    password,
    roll,
    email,
    registration,
  });

  return {
    message: "Signup Successfull.",
    success: true,
    type: "success",
  };
};
