"use server";

import { db } from "@/lib/prisma";

export const getQuickBooksCustomerSyncRecordByUserId = async ({
  user_id
}: {
  user_id: string;
}) => {
  return await db.quickbooksCustomerSync.findUnique({ where: { user_id } });
};
