import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        console.log(credentials);

        return null;
      },
    }),
  ],
  callbacks: {
    // async signIn({ user, account, profile }) {
    //   try {
    //     if (account?.provider === "github" || account?.provider === "google") {
    //       const { name, email, image } = user;
    //       const existingUser = await User.findOne({ email });
    //       if (existingUser) return existingUser;
    //       else {
    //         const user = await User.create({ name, email, image });
    //         return user;
    //       }
    //     } else return user || false;
    //   } catch (error) {
    //     console.log("SIGNIN->", error);
    //     return false;
    //   }
    // },
    async jwt({ token, user }) {
      try {
        // console.log("token->", token, "\nuser->", user);
        if (user) {
          token._id = user._id?.toString();
          token.email = user.email;
          token.image = user.image;
        }
        // const existingUser = await User.findOne({ email: token.email }).select(
        //   "_id"
        // );
        // token._id = existingUser._id;
        // return token;
      } catch (error) {
        console.log("JWT->", error);
        return token;
      }
    },

    async session({ session, token }) {
      // console.log("session->", session, "\ntoken->", token);
      return { ...session, user: { ...token } };
    },
  },
  pages: {
    signIn: "/login",
    signOut: "/logout",
  },
  session: {
    strategy: "jwt",
  },
};

export default NextAuth(authOptions);
