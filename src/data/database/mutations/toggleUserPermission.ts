"use server";

import { db } from "@/lib/prisma";

export const toggleUserPermission = async ({
  checked,
  userId,
  permissionId
}: {
  checked: boolean;
  userId: string;
  permissionId: string;
}) => {
  switch (checked) {
    case true:
      return await db.userPermissions.delete({
        where: {
          userId_permissionId: {
            userId,
            permissionId
          }
        }
      });
    case false:
      return await db.userPermissions.create({
        data: {
          userId,
          permissionId
        }
      });
  }
};
