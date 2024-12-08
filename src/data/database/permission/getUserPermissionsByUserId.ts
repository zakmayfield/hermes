"use server";
import { db } from "@/lib/prisma";

export const getUserPermissionsByUserId = async (userId: string) => {
  return await db.permission.findMany({
    where: { userPermissions: { some: { userId } } },
    include: { userPermissions: { select: { grantedAt: true } } }
  });
};
