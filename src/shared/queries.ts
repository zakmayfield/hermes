"use server";

import { getAuthSession } from "@/lib/auth/auth.options";
import { db } from "@/lib/prisma";
import { Roles } from "@prisma/client";

export const fetchRoles = async () => {
  const roles = await db.role.findMany();
  return roles;
};

export const fetchUserRoles = async () => {
  const user_id = await getAuthSession().then((session) => session?.user.id);

  const user_roles = await db.role.findMany({
    where: { user_roles: { some: { user_id } } }
  });

  return user_roles;
};

export const fetchRolePermissions = async () => {
  const permissions = await db.rolePermissions.findMany({
    include: {
      permission: true,
      role: true
    }
  });
  return permissions;
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
