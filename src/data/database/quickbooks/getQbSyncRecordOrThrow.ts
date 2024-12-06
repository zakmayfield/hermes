"use server";

import { db } from "@/lib/prisma";
import { QuickbooksCustomerSync } from "@prisma/client";

export const getQbSyncRecordOrThrow = async (
  userId: string
): Promise<QuickbooksCustomerSync> => {
  try {
    const record = await db.quickbooksCustomerSync.findUniqueOrThrow({
      where: { userId }
    });
    return record;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }

    throw new Error("Unexpected Server Error");
  }
};
