"use server";
import { getAuthSession } from "@/lib/auth/auth.options";
import { db } from "@/lib/prisma";
import { $Enums } from "@prisma/client";

export const getUsersByRole = async (role: $Enums.Roles) => {
  return await db.user.findMany({ where: { role: { name: role } } });
};

export const getUserById = async (id: string) => {
  return await db.user.findUnique({ where: { id } });
};

export const getUserByEmail = async (email: string) => {
  return await db.user.findUnique({ where: { email } });
};

export const getAuthUserRole = async () => {
  const email = await getAuthSession().then((session) => session?.user.email);

  return await db.user
    .findUnique({
      where: { email },
      select: { role: true }
    })
    .then((u) => u?.role.name);
};

export const getUserPermissionsById = async (user_id: string) => {
  return await db.permission.findMany({
    where: { user_permissions: { some: { user_id } } },
    include: { user_permissions: { select: { granted_at: true } } }
  });
};
