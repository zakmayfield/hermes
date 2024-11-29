"use server";
import { db } from "@/lib/prisma";

export const getUserPermissionsByUserId = async (user_id: string) => {
  return await db.permission.findMany({
    where: { user_permissions: { some: { user_id } } },
    include: { user_permissions: { select: { granted_at: true } } }
  });
};
