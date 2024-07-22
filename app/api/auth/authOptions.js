import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { dbConnect } from "@/lib/connection";
import { User } from "@/model/User";
import { loginSchema } from "@/schema/zodSchema";

dbConnect();

export const authOptions = {
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        try {
          const validatedData = loginSchema.safeParse({
            roll: credentials.roll,
            password: credentials.password,
          });
          if (validatedData.error) {
            throw new Error(
              "Invalid Input fields. please check and try again."
            );
          }
          if (validatedData.success) {
            const { roll, password } = validatedData.data;

            const isLE =
              roll.includes("le") ||
              roll.includes("Le") ||
              roll.includes("LE") ||
              roll.includes("lE");

            const user = await User.findOne({
              $and: [
                { roll: isLE ? Math.abs(parseInt(roll.slice(2))) : roll },
                { isLE },
              ],
            });

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
        token.batch = user.batch;
        token.registration = user.registration;
        token.isLE = user.isLE;
        token.branch = user.branch;
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
