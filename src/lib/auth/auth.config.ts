import { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "@/lib/prisma";
import { signupValidator } from "@/utils/validators/forms/signupValidator";
import { createNewUser, updateUserLoginDate } from "@/data/database/mutations";
import { doesUserExist, getJWTUser } from "@/data/database/queries";
import { signinValidator } from "@/utils/validators/forms/signinValidator";
import { comparePasswords } from "@/utils/comparePasswords";

//^ adapter
type NextAuthAdapter = NextAuthOptions["adapter"];
// @ts-expect-error NextAuth has not configured support for Prisma Omit API
const adapter: NextAuthAdapter = PrismaAdapter(db);

//^ strategy
type NextAuthSessionStrategy = NextAuthOptions["session"];
const session: NextAuthSessionStrategy = {
  strategy: "jwt",
  maxAge: 8 * 60 * 60
};

//^ pages
type NextAuthPages = NextAuthOptions["pages"];
const pages: NextAuthPages = {
  signIn: "/sign-in"
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
      const { validator } = signinValidator;
      const safeParse = validator.safeParse(credentials);
      if (!safeParse.success) {
        throw new Error(safeParse.error.message);
      }

      const { email, password } = safeParse.data;

      const user = await doesUserExist({ email });
      if (!user) {
        throw new Error("A user with this email does not exist");
      }

      const isPasswordMatch = await comparePasswords(password, user.password);
      if (!isPasswordMatch) {
        throw new Error("Invalid password");
      }

      await updateUserLoginDate({ id: user.id });

      return user;
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
      const { validator } = signupValidator;
      const safeParse = validator.safeParse(credentials);

      if (!safeParse.success) {
        throw new Error(safeParse.error.message);
      }

      const { customerInfo, billAddr, shipAddr } = safeParse.data;

      const userExists = await doesUserExist({ email: customerInfo.email });
      if (!!userExists) {
        throw new Error("A user with that email already exists");
      }

      const user = await createNewUser({
        data: {
          customerInfo,
          shipAddr,
          billAddr
        }
      });

      return user;
    }
  })
];

//^ callbacks
type NextAuthCallbacks = NextAuthOptions["callbacks"];
const callbacks: NextAuthCallbacks = {
  async jwt({ token, user }) {
    const db_user = await getJWTUser({ email: token.email });

    if (!db_user) {
      token.id = user.id;
      return token;
    }

    const user_role = db_user.role.name;
    const onboarding_status = db_user.onboarding?.status;

    return {
      id: db_user.id,
      email: db_user.email,
      onboarding_status,
      role: user_role
    };
  },

  async session({ token, session }) {
    if (token) {
      session.user.id = token.id;
      session.user.email = token.email;
      session.user.onboarding_status = token.onboarding_status;
      session.user.role = token.role;
    }

    return session;
  },

  redirect() {
    return "/dashboard";
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
