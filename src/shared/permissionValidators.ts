"use server";

import { getAuthSession } from "@/lib/auth/auth.options";
import { db } from "@/lib/prisma";
import { $Enums } from "@prisma/client";

const isPermissionEnabled = async (permission_name: $Enums.Permissions) => {
  const permission = await db.rolePermissions.findFirst({
    where: { permission: { name: permission_name } }
  });

  return !!permission?.permission_level;
};

export const hasPermission = async (permission_name: $Enums.Permissions) => {
  const session = await getAuthSession();

  const userPermissions = await db.userPermissions.findMany({
    where: { user_id: session?.user?.id },
    select: { permission: { select: { name: true } } }
  });

  return (
    !!(await isPermissionEnabled(permission_name)) ||
    !!userPermissions.find((up) => up.permission.name === permission_name)
  );
};
