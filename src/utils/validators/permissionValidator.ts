"use server";

import { db } from "@/lib/prisma";
import { $Enums } from "@prisma/client";
import { getAuthSession } from "../database/session/queries";

const isPermissionEnabled = async (permission_name: $Enums.Permissions) => {
  const permission = await db.rolePermissions.findFirst({
    where: { permission: { name: permission_name } }
  });

  return !!permission?.permission_level;
};

export const hasPermission = async (permission_name: $Enums.Permissions) => {
  const sessionData = await getAuthSession();

  if (!sessionData || !sessionData.response) {
    return false;
  }

  const { id, role } = sessionData.response;

  if (role === $Enums.Roles.SUPER) {
    return true;
  }

  const userPermissions = await db.userPermissions.findMany({
    where: { user_id: id },
    select: { permission: { select: { name: true } } }
  });

  return (
    !!(await isPermissionEnabled(permission_name)) ||
    !!userPermissions.find((up) => up.permission.name === permission_name)
  );
};
