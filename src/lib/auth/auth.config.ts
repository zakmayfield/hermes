import { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare, genSalt, hash } from "bcryptjs";
import { db } from "@/lib/prisma";

//^ adapter
type NextAuthAdapter = NextAuthOptions["adapter"];
// TODO: Type error from omitting password globally
const adapter: NextAuthAdapter = PrismaAdapter(db);

//^ strategy
type NextAuthSessionStrategy = NextAuthOptions["session"];
const session: NextAuthSessionStrategy = {
  strategy: "jwt"
};

//^ pages
type NextAuthPages = NextAuthOptions["pages"];
const pages: NextAuthPages = {
  signIn: "/"
};

//^ providers
type NextAuthProviders = NextAuthOptions["providers"];
const providers: NextAuthProviders = [
  CredentialsProvider({
    id: "sign-in",
    name: "Credentials",
    credentials: {
      email: {
        label: "Email",
        type: "text"
      },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials) {
      return null;
    }
  }),
  CredentialsProvider({
    id: "sign-up",
    name: "Credentials",
    credentials: {
      email: { label: "Email", type: "text" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials) {
      return null;
    }
  })
];

//^ callbacks
type NextAuthCallbacks = NextAuthOptions["callbacks"];
const callbacks: NextAuthCallbacks = {
  async jwt({ token, user }) {
    return token;
  },

  async session({ token, session }) {
    if (token) {
      session.user.id = token.id;
    }

    return session;
  },

  redirect() {
    return "/";
  }
};

//^ config
export const authConfig = {
  adapter,
  session,
  pages,
  providers,
  callbacks
} satisfies NextAuthOptions;
