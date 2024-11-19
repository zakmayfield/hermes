import { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "@/lib/prisma";
import { comparePasswords, hashPassword } from "@/utils/security/password";
import {
  createUser,
  doesUserExist,
  getJWTUser,
  isUserAuthorizedAdmin,
  isValidCredentials,
  updateUserLoginDate
} from "@/utils/security/user";
import { createJWT } from "@/utils/security/jwt";
import { $Enums } from "@prisma/client";
import {
  getQBTokenData,
  refreshAccessToken,
  shouldRefreshToken
} from "@/utils/database/quickbooks/token";

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
      const { email, password } = await isValidCredentials(credentials);
      if (!email || !password) {
        throw new Error("Please complete all required fields");
      }

      const { user } = await doesUserExist(email);
      if (!user) {
        throw new Error("A user with this email does not exist");
      }

      const { isPasswordMatch } = await comparePasswords(password, user.password);
      if (!isPasswordMatch) {
        throw new Error("Invalid password");
      }

      // Check QuickBooks token expiration and determine refresh
      if (user.role_id === "cm184jlbr0001tfnb7am96fbi" || "cm184jlbr0000tfnb31tanbkr") {
        const quickbooksTokenRecord = await getQBTokenData(user.id);

        if (
          await shouldRefreshToken(
            user.last_login_date,
            quickbooksTokenRecord?.access_token_expiration_time
          )
        ) {
          // TODO: *** Clean up refresh token code ***
          await refreshAccessToken(user.id);
        }
      }

      await updateUserLoginDate(user.id);

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
      const { email, password } = await isValidCredentials(credentials);
      if (!email || !password) {
        throw new Error("Please complete all required fields");
      }

      const { user: userExists } = await doesUserExist(email);
      if (!!userExists) {
        throw new Error("A user with that email already exists");
      }

      const { jwt, jwt_expiration_date } = await createJWT(email);
      const hashed_password = await hashPassword(password);
      const isAuthorizedAdmin = await isUserAuthorizedAdmin(email);

      const { user } = await createUser({
        email: email.toLowerCase(),
        password: hashed_password,
        role: isAuthorizedAdmin ? $Enums.Roles.ADMIN : $Enums.Roles.USER,
        jwt: {
          token: jwt,
          identifier: `email-verification-${email}`,
          expires: jwt_expiration_date
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
    const db_user = await getJWTUser(token.email);

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
