import connectToDB from "@/database";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { signIn } from "next-auth";
import User from "@/models/user";

const authOptions = {
  providers: [
    GoogleProvider({
        clientId:
        "507687542120-bjp7rv9ro9uqcqn2pgnj59hoa6o69ivt.apps.googleusercontent.com",
        clientSecret: "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",
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "google") {
        const { email, name } = user;

        try {
          await connectToDB;
          const userExist = await User.findOne({ email });

          if (!userExist) {
            const res = await fetch("/api/user", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ email, name }),
            });
            if (res.success) {
              return user;
            }
          }
        } catch (error) {
          console.log(error);
        }
      }
      return user;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
