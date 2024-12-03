"use server";
import { db } from "@/lib/prisma";

export const getRoleById = async ({ role_id }: { role_id: string }) => {
  return await db.role.findUnique({ where: { role_id } });
};
