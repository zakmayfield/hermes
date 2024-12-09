"use server";

import { db } from "@/lib/prisma";

export const doesUserExist = async ({ email }: { email: string }) => {
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

  return user;
};
