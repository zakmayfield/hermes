"use server";

import { getAuthSession } from "@/lib/auth/auth.options";
import { db } from "@/lib/prisma";
import {
  AuthorizedAdmin,
  Permission,
  Role,
  RolePermissions,
  Roles
} from "@prisma/client";

export const fetchUserRoles = async () => {
  const user_id = await getAuthSession().then((session) => session?.user.id);

  const user_roles = await db.role.findMany({
    where: { user_roles: { some: { user_id } } }
  });

  return user_roles;
};

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
  role: Roles;
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

export const fetchPermissionsByRole = async (role: Roles) => {
  const role_permissions = await db.permission.findMany({
    where: { role_permissions: { some: { role: { name: role } } } }
  });

  return role_permissions;
};

export const fetchUserPermissions = async () => {
  const user_id = await getAuthSession().then((s) => s?.user.id);
  const user_permissions = await db.permission.findMany({
    where: { user_permissions: { some: { user_id } } },
    include: { user_permissions: { select: { granted_at: true, revoked_at: true } } }
  });
  return user_permissions;
};

export type FetchAuthorizedAdminsOutput = AuthorizedAdmin;

export const fetchAuthorizedAdmins = async (): Promise<FetchAuthorizedAdminsOutput[]> => {
  return await db.authorizedAdmin.findMany({ orderBy: { created_at: "desc" } });
};
