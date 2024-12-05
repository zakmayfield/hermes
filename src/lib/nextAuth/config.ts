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

export const config: NextAuthOptions = {
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
      const dbUser = await getJWTUser({ email: token.email });

      if (!dbUser) {
        token.id = user.id;
        return token;
      }

      const userRole = dbUser.role.name;
      const onboardingStatus = dbUser.onboarding?.status;

      return {
        id: dbUser.id,
        email: dbUser.email,
        onboardingStatus,
        role: userRole
      };
    },

    async session({ token, session }) {
      if (token) {
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.onboardingStatus = token.onboardingStatus;
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
