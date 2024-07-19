import { date, z } from "zod";

export const loginSchema = z.object({
  roll: z.string().length(5, {
    message: "Invalid roll number",
  }),
  password: z.string().length(1, {
    message: "Password is required",
  }),
});

export const signupSchema = z
  .object({
    roll: z
      .string()
      .min(1, {
        message: "Roll Number is required.",
      })
      .length(5, {
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
    registration: z
      .string()
      .max(11, {
        message: "invalid Registration Number.",
      })
      .optional(),
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
