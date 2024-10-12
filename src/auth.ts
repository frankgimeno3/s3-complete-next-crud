import NextAuth, { NextAuthOptions } from "next-auth";
import GitHub from "next-auth/providers/github";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/db";

export const authConfig: NextAuthOptions = { 
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID || "",  
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    }),
  ],
  adapter: DrizzleAdapter(db),
  callbacks: {
    async session({ session, user }) {
      session.user.id = user.id;
      return session;
    },
  }
};

export const { handlers, auth, signOut } = NextAuth(authConfig);
