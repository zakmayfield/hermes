"use server";

import { db } from "@/lib/prisma";

export const toggleUserPermission = async ({
  checked,
  user_id,
  permission_id
}: {
  checked: boolean;
  user_id: string;
  permission_id: string;
}) => {
  switch (checked) {
    case true:
      return await db.userPermissions.delete({
        where: {
          user_id_permission_id: {
            user_id,
            permission_id
          }
        }
      });
    case false:
      return await db.userPermissions.create({
        data: {
          user_id,
          permission_id
        }
      });
  }
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
