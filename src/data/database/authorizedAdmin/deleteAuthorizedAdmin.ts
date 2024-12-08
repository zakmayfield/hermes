"use server";
import { db } from "@/lib/prisma";
import { AuthorizedAdmin } from "@prisma/client";

export const deleteAuthorizedAdmin = async ({
  authorizedAdminId
}: {
  authorizedAdminId: string;
}): Promise<AuthorizedAdmin> => {
  return await db.authorizedAdmin.delete({ where: { authorizedAdminId } });
};
