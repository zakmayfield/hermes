"use server";
import { db } from "@/lib/prisma";
import { AuthorizedAdmin } from "@prisma/client";

export const deleteAuthorizedAdmin = async ({
  authorized_admin_id
}: {
  authorized_admin_id: string;
}): Promise<AuthorizedAdmin> => {
  return await db.authorizedAdmin.delete({ where: { authorized_admin_id } });
};
