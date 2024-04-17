import NextAuth from "next-auth";
import github from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "./db";
import async from "../../snippets/src/app/snippets/[id]/edit/page";

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

if (!GITHUB_CLIENT_ID || !GITHUB_CLIENT_SECRET) {
  throw new Error("Missing Github OAuth credentials.");
}

//NextAuth ekta object return korbe jeta onek property jemon get post auth signout signin eshob destructure korbe, ar eta amra export kore pura application e onek jaygay use korbo.
export const {
  handlers: { GET, POST },
  auth,
  signOut,
  signIn,
} = NextAuth({
  adapter: PrismaAdapter(db),
  providers: [
    github({
      clientId: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, user }: any) {
      //This session function will be called jokhon amra eta verify korte chai ke application ta chalaitese
      if (session && user) {
        session.user.id = user.id;
      }

      return session;
    },
  },
});
