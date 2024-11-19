"use server";

import { db } from "@/lib/prisma";
import { $Enums } from "@prisma/client";

export const doesUserExist = async (email: string) => {
  const user = await db.user.findUnique({
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

  return { user };
};

export const isValidCredentials = async (
  credentials: Record<"email" | "password", string> | undefined
) => {
  const email = credentials?.email;
  const password = credentials?.password;

  return { email, password };
};

export const isUserAuthorizedAdmin = async (email: string) => {
  return !!(await db.authorizedAdmin.findUnique({
    where: { email }
  }));
};

export const getJWTUser = async (email: string) => {
  const user = await db.user.findUnique({
    where: { email },
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

  return user;
};

export const updateUserLoginDate = async (id: string) => {
  await db.user.update({
    where: { id },
    data: {
      last_login_date: new Date()
    }
  });
};

export const createUser = async ({
  email,
  password,
  role,
  jwt
}: {
  email: string;
  password: string;
  role: $Enums.Roles;
  jwt: {
    token: string;
    identifier: string;
    expires: Date;
  };
}) => {
  const user = await db.user.create({
    data: {
      email,
      password,
      last_login_date: new Date(),
      role: { connect: { name: role } },
      verification_token: {
        create: {
          token: jwt.token,
          identifier: jwt.identifier,
          expires: jwt.expires
        }
      },
      onboarding: { create: { status: "PENDING" } }
    },
    include: {
      onboarding: {
        select: {
          status: true
        }
      }
    }
  });

  return { user };
};
