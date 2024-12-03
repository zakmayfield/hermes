"use server";

import { db } from "@/lib/prisma";
import { TogglePermissionLevelInput } from "../models/Permission";

export const togglePermissionLevel = async (payload: TogglePermissionLevelInput) => {
  const {
    permission_level,
    permission: { permission_id, role_id }
  } = payload;

  function toggle() {
    return !permission_level ? { increment: 1 } : { decrement: 1 };
  }

  return await db.rolePermissions.update({
    where: { role_id_permission_id: { role_id, permission_id } },
    data: { permission_level: toggle() }
  });
};
