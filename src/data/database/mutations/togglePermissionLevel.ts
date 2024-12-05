"use server";

import { db } from "@/lib/prisma";
import { TogglePermissionLevelInput } from "../models/Permission";

export const togglePermissionLevel = async (payload: TogglePermissionLevelInput) => {
  const {
    permission_level,
    permission: { permissionId, roleId }
  } = payload;

  function toggle() {
    return !permission_level ? { increment: 1 } : { decrement: 1 };
  }

  return await db.rolePermissions.update({
    where: { roleId_permissionId: { roleId, permissionId } },
    data: { permission_level: toggle() }
  });
};
