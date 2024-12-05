"use server";
import { db } from "@/lib/prisma";

export const getRoleById = async ({ roleId }: { roleId: string }) => {
  return await db.role.findUnique({ where: { roleId } });
};
