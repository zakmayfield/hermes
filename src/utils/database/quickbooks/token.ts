"use server";

import { getAuthSession } from "@/lib/auth/auth.options";
import { db } from "@/lib/prisma";

export const getQBTokenData = async () => {
  const session = await getAuthSession();

  return await db.quickbooksToken.findUnique({
    where: { user_id: session?.user.id }
  });
};
