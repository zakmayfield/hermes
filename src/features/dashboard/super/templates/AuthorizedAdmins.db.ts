"use server";
import { db } from "@/lib/prisma";
import { AuthorizedAdmin } from "@prisma/client";

export type FetchAuthorizedAdminsOutput = AuthorizedAdmin;

export const fetchAuthorizedAdmins = async (): Promise<FetchAuthorizedAdminsOutput[]> => {
  return await db.authorizedAdmin.findMany({ orderBy: { created_at: "desc" } });
};

export type AddAuthorizedAdminInput = { email: string };
export type AddAuthorizedAdminOutput = AuthorizedAdmin;

export const addAuthorizedAdmin = async ({
  email
}: AddAuthorizedAdminInput): Promise<AddAuthorizedAdminOutput> => {
  return await db.authorizedAdmin.create({
    data: { email }
  });
};

type DeleteAuthorizedAdminInput = { authorized_admin_id: string };
type DeleteAuthorizedAdminOutput = AuthorizedAdmin;

export const deleteAuthorizedAdmin = async (
  props: DeleteAuthorizedAdminInput
): Promise<DeleteAuthorizedAdminOutput> => {
  const { authorized_admin_id } = props;
  return await db.authorizedAdmin.delete({ where: { authorized_admin_id } });
};
