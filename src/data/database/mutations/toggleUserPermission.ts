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
