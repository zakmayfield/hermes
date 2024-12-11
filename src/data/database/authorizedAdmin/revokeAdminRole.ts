"use server";
import { db } from "@/lib/prisma";
import { getUserByEmail } from "@/data/database/user";

export const revokeAdminRole = async (email: string) => {
  const user = await getUserByEmail(email);

  if (user) {
    await db.user.update({
      where: { email },
      data: { role: { connect: { name: "CUSTOMER" } } }
    });
  }
};
