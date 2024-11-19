"use server";
import { db } from "@/lib/prisma";
import { $Enums, Permission, RolePermissions } from "@prisma/client";

export const getPermissionsByRole = async (role: $Enums.Roles) => {
  return await db.permission.findMany({
    where: { role_permissions: { some: { role: { name: role } } } }
  });
};

export type GetRolePermissionsInput = {
  role: $Enums.Roles;
};

export type GetRolePermissionsOutput = RolePermissions & {
  permission: Permission;
};

export const getRolePermissions = async ({
  role
}: GetRolePermissionsInput): Promise<GetRolePermissionsOutput[]> => {
  return await db.rolePermissions.findMany({
    where: { role: { name: role } },
    orderBy: {
      permission: { name: "asc" }
    },
    include: {
      permission: true
    }
  });
};
