"use server";

import { db } from "@/lib/prisma";
import { $Enums } from "@prisma/client";

export const getUsersByRole = async ({ role }: { role: $Enums.Roles }) => {
  return await db.user.findMany({ where: { role: { name: role } } });
};
