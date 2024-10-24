"use server";

import { getAuthSession } from "@/lib/auth/auth.options";
import { db } from "@/lib/prisma";
import { Roles } from "@prisma/client";

export const fetchUser = async (email: string) => {
  return await db.user.findUnique({ where: { email } });
};

export const fetchRoles = async () => {
  return await db.role.findMany();
};

export const fetchAuthUserRole = async () => {
  const email = await getAuthSession().then((session) => session?.user.email);

  return await db.user
    .findUnique({
      where: { email },
      select: { role: true }
    })
    .then((u) => u?.role.name);
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
