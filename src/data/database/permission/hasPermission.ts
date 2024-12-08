"use server";

import { getCoreSessionUser } from "@/data/session";
import { db } from "@/lib/prisma";
import { $Enums } from "@prisma/client";

const isPermissionEnabled = async (permission_name: $Enums.Permissions) => {
  const permission = await db.rolePermissions.findFirst({
    where: { permission: { name: permission_name } }
  });

  return !!permission?.permission_level;
};

export const hasPermission = async (permission_name: $Enums.Permissions) => {
  const session = await getCoreSessionUser();

  if (!session) {
    return false;
  }

  const { id, role } = session;

  if (role === $Enums.Roles.SUPER) {
    return true;
  }

  const userPermissions = await db.userPermissions.findMany({
    where: { userId: id },
    select: { permission: { select: { name: true } } }
  });

  return (
    !!(await isPermissionEnabled(permission_name)) ||
    !!userPermissions.find((up) => up.permission.name === permission_name)
  );
};
