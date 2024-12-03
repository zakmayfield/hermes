"use server";

import { db } from "@/lib/prisma";
import { AuthorizedAdmin } from "@prisma/client";

export const getAuthorizedAdmins = async (): Promise<AuthorizedAdmin[]> => {
  return await db.authorizedAdmin.findMany({ orderBy: { created_at: "desc" } });
};
