"use server";

import { getCoreSessionUserOrThrow } from "@/data/session";
import { db } from "@/lib/prisma";
import { QuickbooksToken } from "@prisma/client";

export const getQuickbooksTokens = async (): Promise<QuickbooksToken | null> => {
  const { id } = await getCoreSessionUserOrThrow();

  const qbToken = await db.quickbooksToken.findUnique({ where: { user_id: id } });
  if (!qbToken) {
    return null;
  }

  return qbToken;
};
