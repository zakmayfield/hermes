"use server";
import { db } from "@/lib/prisma";
import { $Enums } from "@prisma/client";

export const getPermissionsByRole = async ({ role }: { role: $Enums.Roles }) => {
  return await db.permission.findMany({
    where: { role_permissions: { some: { role: { name: role } } } }
  });
};
