"use server";
import { db } from "@/lib/prisma";

export const getUserById = async (id: string) => {
  return await db.user.findUnique({ where: { id } });
};
