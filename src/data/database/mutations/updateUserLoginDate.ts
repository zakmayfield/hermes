"use server";

import { db } from "@/lib/prisma";

export const updateUserLoginDate = async ({ id }: { id: string }) => {
  await db.user.update({
    where: { id },
    data: {
      last_login_date: new Date()
    }
  });
};
