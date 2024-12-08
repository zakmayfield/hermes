"use server";
import { db } from "@/lib/prisma";
import { Roles } from "@prisma/client";
import { RolePermissionsWithPermission } from "../models/Permission";

export const getRolePermissionsByRoles = async ({
  role
}: {
  role: Roles;
}): Promise<RolePermissionsWithPermission[]> => {
  const rolePermissions = await db.rolePermissions.findMany({
    where: { role: { name: role } },
    orderBy: {
      permission: { name: "asc" }
    },
    include: {
      permission: true
    }
  });
  return rolePermissions;
};
