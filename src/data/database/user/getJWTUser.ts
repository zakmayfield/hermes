"use server";

import { db } from "@/lib/prisma";

export const getJWTUser = async ({ email }: { email: string }) => {
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
