"use server";

import { db } from "@/lib/prisma";

export const createQuickbooksCustomerSyncRecord = async ({
  id,
  companyName,
  userId
}: {
  id: string;
  companyName: string;
  userId: string;
}) => {
  try {
    return await db.quickbooksCustomerSync.create({
      data: {
        customerId: id,
        companyName: companyName,
        userId
      }
    });
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }

    throw new Error("Unexpected Server Error");
  }
};
