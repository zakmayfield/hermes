"use server";
import { db } from "@/lib/prisma";
import { $Enums, Permission, Role, RolePermissions } from "@prisma/client";

type FetchRoleByIdInput = {
  role_id: string;
};

type FetchRoleByIdOutput = Role;

export const fetchRoleById = async ({
  role_id
}: FetchRoleByIdInput): Promise<FetchRoleByIdOutput | null> => {
  return await db.role.findUnique({ where: { role_id } });
};

export type FetchRolePermissionsInput = {
  role: $Enums.Roles;
};

export type FetchRolePermissionsOutput = RolePermissions & {
  permission: Omit<Permission, "permission_id">;
};

export const fetchRolePermissions = async ({
  role
}: FetchRolePermissionsInput): Promise<FetchRolePermissionsOutput[]> => {
  return await db.rolePermissions.findMany({
    where: { role: { name: role } },
    orderBy: {
      permission: { name: "asc" }
    },
    include: {
      permission: {
        omit: { permission_id: true }
      }
    }
  });
};

export type TogglePermissionLevelInput = {
  role_id: string;
  permission_id: string;
  permission_level: number;
};

export const togglePermissionLevel = async (payload: TogglePermissionLevelInput) => {
  const { role_id, permission_id, permission_level } = payload;

  function toggle() {
    return !permission_level ? { increment: 1 } : { decrement: 1 };
  }

  return await db.rolePermissions.update({
    where: { role_id_permission_id: { role_id, permission_id } },
    data: { permission_level: toggle() }
  });
};
