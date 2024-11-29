"use server";
import { getUserByEmail } from "@/data/database/queries";
import { db } from "@/lib/prisma";

export const revokeAdminRole = async (email: string) => {
  const user = await getUserByEmail(email);

  if (user) {
    await db.user.update({
      where: { email },
      data: { role: { connect: { name: "CUSTOMER" } } }
    });
  }
};
