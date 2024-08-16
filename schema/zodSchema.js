import { date, z } from "zod";

export const loginSchema = z.object({
  roll: z
    .string()
    .min(5, {
      message: "Invalid roll number",
    })
    .max(8, {
      message: "Invalid roll number",
    }),
  password: z.string().min(8, {
    message: "Password length should be 8 character long.",
  }),
});

export const facultyLoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, {
    message: "Password length should be 8 character long.",
  }),
});
export const emailVerificationSchema = z.object({
  otp: z.string().length(6, {
    message: "Invalid OTP",
  }),
});

export const facultyloginSchema = z.object({
  roll: z
    .string()
    .min(5, {
      message: "Invalid roll number",
    })
    .max(8, {
      message: "Invalid roll number",
    }),
  password: z.string().min(8, {
    message: "Password length should be 8 character long.",
  }),
});

export const signupSchema = z.object({
  roll: z.string().max(8, {
    message: "Invalid roll number",
  }),
  email: z.string().email(),
  password: z.string().min(8, {
    message: "Password length must be atleast 8 character long.",
  }),
  confirmPassword: z.string().min(8, {
    message: "Password length must be atleast 8 character long.",
  }),
  firstName: z.string().min(3, {
    message: "First Name is too short",
  }),
  lastName: z
    .string()
    .max(25, {
      message: "Last Name is too large",
    })
    .optional(),
  registration: z.string().length(11, {
    message: "invalid Registration Number.",
  }),
});

export const facultySignupSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(8, {
      message: "Password length must be atleast 8 character long.",
    }),
    confirmPassword: z.string().min(8, {
      message: "Password length must be atleast 8 character long.",
    }),
    firstName: z.string().min(3, {
      message: "First Name is too short",
    }),
    lastName: z.string().max(25, {
      message: "Last Name is too large",
    }),
  })

  .refine(
    (data) => {
      if (data.password !== data.confirmPassword) {
        return { confirmPassword: "Passwords do not match" };
      }
      return true;
    },
    {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    }
  );
