import { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare, genSalt, hash } from "bcryptjs";
import { db } from "@/lib/prisma";
import { JwtPayload, sign, verify } from "jsonwebtoken";
import { SECRET } from "@/utils/constants";

//^ adapter
type NextAuthAdapter = NextAuthOptions["adapter"];
// @ts-expect-error NextAuth has not configured support for Prisma Omit API
const adapter: NextAuthAdapter = PrismaAdapter(db);

//^ strategy
type NextAuthSessionStrategy = NextAuthOptions["session"];
const session: NextAuthSessionStrategy = {
  strategy: "jwt"
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
      // validation
      function isValidCredentials(
        credentials: Record<"email" | "password", string> | undefined
      ) {
        const email = credentials?.email;
        const password = credentials?.password;

        if (!email || !password) {
          throw new Error("Please complete all required fields.");
        }

        return { email, password };
      }

      const { email, password } = isValidCredentials(credentials);

      async function canSignIn() {
        const is_user = await db.user.findUnique({
          where: { email },
          omit: {
            password: false
          },
          include: {
            onboarding: {
              select: {
                status: true
              }
            }
          }
        });

        if (!is_user) {
          throw new Error("A user with this email does not exist.");
        }

        return { user: is_user };
      }

      const { user } = await canSignIn();

      async function comparePasswords() {
        const is_match = await compare(password, user.password);

        if (!is_match) {
          throw new Error("Invalid password");
        }
      }

      await comparePasswords();

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
      // validation
      function isValidCredentials(
        credentials: Record<"email" | "password", string> | undefined
      ) {
        const email = credentials?.email;
        const password = credentials?.password;

        if (!email || !password) {
          throw new Error("Please complete all required fields.");
        }

        return { email, password };
      }

      const { email, password } = isValidCredentials(credentials);

      async function canCreateUser() {
        const is_user = await db.user.findUnique({
          where: { email },
          select: { email: true }
        });

        if (is_user) {
          throw new Error("User already exists. Please log in to continue.");
        }
      }

      await canCreateUser();

      // encryption
      function createToken() {
        const t = sign({ email }, SECRET!, { expiresIn: "48h" });
        const v = verify(t, SECRET!) as JwtPayload;
        const exp_ms = v.exp! * 1000;

        return {
          jwt: t,
          expires_date: new Date(exp_ms)
        };
      }

      const { jwt, expires_date } = createToken();

      async function encryptPassword() {
        const salt = await genSalt(12);
        const hashed_pw = await hash(password, salt);

        return { hashed_pw };
      }

      const { hashed_pw } = await encryptPassword();

      const isAuthorizedAdmin = !!(await db.authorizedAdmin.findUnique({
        where: { email }
      }));

      // create
      async function createUser() {
        const user = await db.user.create({
          data: {
            email,
            password: hashed_pw,
            verification_token: {
              create: {
                token: jwt,
                identifier: `email-verification-${email}`,
                expires: expires_date
              }
            },
            role: {
              connect: { name: isAuthorizedAdmin ? "ADMIN" : "USER" }
            }
          },
          include: {
            onboarding: {
              select: {
                status: true
              }
            }
          }
        });

        await db.onboarding.create({
          data: {
            user_id: user.id
          }
        });

        return { user };
      }

      const { user } = await createUser();

      return user;
    }
  })
];

//^ callbacks
type NextAuthCallbacks = NextAuthOptions["callbacks"];
const callbacks: NextAuthCallbacks = {
  async jwt({ token, user }) {
    const db_user = await db.user.findUnique({
      where: { email: token.email },
      include: {
        onboarding: {
          select: {
            status: true
          }
        },
        role: {
          select: {
            name: true
          }
        }
      }
    });

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
