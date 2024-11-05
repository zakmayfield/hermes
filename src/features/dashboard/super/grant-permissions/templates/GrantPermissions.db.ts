"use server";
import { db } from "@/lib/prisma";

export const grantPermission = async ({
  user_id,
  permission_id
}: {
  user_id: string;
  permission_id: string;
}) => {
  return await db.userPermissions.create({
    data: {
      user_id,
      permission_id
    }
  });
};

export const revokePermission = async ({
  user_id,
  permission_id
}: {
  user_id: string;
  permission_id: string;
}) => {
  return await db.userPermissions.delete({
    where: {
      user_id_permission_id: {
        user_id,
        permission_id
      }
    }
  });
};
