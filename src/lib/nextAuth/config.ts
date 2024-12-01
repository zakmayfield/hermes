import { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "@/lib/prisma";
import { signupValidator } from "@/utils/validators/forms/signupValidator";
import { createNewUser, updateUserLoginDate } from "@/data/database/mutations";
import { doesUserExist, getJWTUser } from "@/data/database/queries";
import { signinValidator } from "@/utils/validators/forms/signinValidator";
import { comparePasswords } from "@/utils/comparePasswords";
import { Provider } from "next-auth/providers";
import { customLogger } from "../winston";

export const config: NextAuthOptions = {
  debug: true,
  logger: {
    error(code, metadata) {
      customLogger("error", code, metadata);
    },
    warn(code) {
      customLogger("warn", code);
    },
    debug(code, metadata) {
      customLogger("debug", code, metadata);
    }
  },
  // @ts-expect-error NextAuth has not configured support for Prisma Omit API
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt",
    maxAge: 8 * 60 * 60
  },
  pages: {
    signIn: "/sign-in"
  },
  callbacks: {
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
  },
  providers: [getSignInProvider(), getSignUpProvider()]
};

function getSignInProvider(): Provider {
  return CredentialsProvider({
    id: "sign-in",
    name: "Credentials",
    credentials: {},
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
  });
}

function getSignUpProvider(): Provider {
  return CredentialsProvider({
    id: "sign-up",
    name: "Credentials",
    credentials: {
      data: {}
    },
    async authorize(credentials) {
      if (credentials) {
        const { validator } = signupValidator;

        const deserialzedData = JSON.parse(credentials.data);
        const safeParse = validator.safeParse(deserialzedData);

        if (!safeParse.data) {
          throw new Error("Invalid Credentials");
        }

        const { customer, bill, ship } = safeParse.data;

        const userExists = await doesUserExist({ email: customer.email });
        if (!!userExists) {
          throw new Error("A user with that email already exists");
        }

        const user = await createNewUser({
          data: {
            customer,
            bill,
            ship
          }
        });

        return user;
      }

      return null;
    }
  });
}
