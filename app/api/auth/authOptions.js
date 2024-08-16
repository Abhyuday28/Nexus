import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { dbConnect } from "@/lib/connection";
import { User } from "@/model/User";
import { facultyLoginSchema, loginSchema } from "@/schema/zodSchema";
import { Faculty } from "@/model/Faculty";

export const authOptions = {
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        try {
          dbConnect();
          const validatedData = credentials.hasOwnProperty("roll")
            ? loginSchema.safeParse({
                roll: credentials.roll,
                password: credentials.password,
              })
            : facultyLoginSchema.safeParse({
                email: credentials.email,
                password: credentials.password,
              });
          if (validatedData.error) {
            throw new Error(
              "Invalid Input fields. please check and try again."
            );
          }
          if (validatedData.success) {
            if (credentials.hasOwnProperty("roll")) {
              const { roll, password } = validatedData.data;

              const user = await User.findOne({ roll });

              if (!user) {
                throw new Error("You are not registered!.");
              }

              const passwordMatched = await bcrypt.compare(
                password,
                user.password
              );

              if (!passwordMatched) {
                throw new Error("Invalid roll number or password.");
              }

              return user;
            } else if (credentials.hasOwnProperty("email")) {
              const { email, password } = validatedData.data;

              const user = await Faculty.findOne({ email });

              if (!user) {
                throw new Error("You are not registered!.");
              }

              const passwordMatched = await bcrypt.compare(
                password,
                user.password
              );

              if (!passwordMatched) {
                throw new Error("Invalid email number or password.");
              }

              return user;
            }
            return null;
          }
          return null;
        } catch (error) {
          throw new Error(error.message);
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user._id;
        token.name = `${user.firstName} ${user.lastName}`;
        token.email = user.email;
        token.batch = user?.batch;
        token.registration = user?.registration;
        token.isLE = user?.isLE;
        token.image = user?.image;
        token.branch = user?.branch;
        token.roll = user?.roll;
        token.role = user?.role;
        token.college = user?.college;
      }
      return token;
    },

    async session({ session, token }) {
      return { ...session, user: { ...token } };
    },
  },
  pages: {
    signIn: "/",
  },
  session: {
    strategy: "jwt",
  },
};
