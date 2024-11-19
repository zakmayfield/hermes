"use server";

import { db } from "@/lib/prisma";
import { AuthorizedAdmin } from "@prisma/client";

export type FetchAuthorizedAdminsOutput = AuthorizedAdmin;

export const fetchAuthorizedAdmins = async (): Promise<FetchAuthorizedAdminsOutput[]> => {
  return await db.authorizedAdmin.findMany({ orderBy: { created_at: "desc" } });
};
