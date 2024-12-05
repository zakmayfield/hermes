"use server";

import { db } from "@/lib/prisma";
import { QuickbooksCustomerSync } from "@prisma/client";

export const getQuickBooksCustomerSyncRecordByUserId = async ({
  userId
}: {
  userId: string;
}): Promise<QuickbooksCustomerSync | null> => {
  try {
    const record = await db.quickbooksCustomerSync.findUnique({ where: { userId } });
    return record;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }

    throw new Error("Unexpected Server Error");
  }
};
