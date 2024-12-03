"use server";

import { db } from "@/lib/prisma";

export const createQuickbooksCustomerSyncRecord = async ({
  id,
  companyName,
  user_id
}: {
  id: string;
  companyName: string;
  user_id: string;
}) => {
  try {
    return await db.quickbooksCustomerSync.create({
      data: {
        customer_id: id,
        company_name: companyName,
        user_id
      }
    });
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }

    throw new Error("Unexpected Server Error");
  }
};
