"use server";
import { db } from "@/lib/prisma";
import { fetchUser } from "@/shared/queries";
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
  try {
    return await db.authorizedAdmin.create({
      data: { email: email.toLowerCase() }
    });
  } catch (error) {
    if (error instanceof Error) {
      if (error.message.includes("Unique constraint")) {
        throw new Error(`${email} is already authorized`);
      }
    }

    throw new Error("Unable to authorize admin");
  }
};

type DeleteAuthorizedAdminInput = { authorized_admin_id: string };
type DeleteAuthorizedAdminOutput = AuthorizedAdmin;

export const deleteAuthorizedAdmin = async (
  props: DeleteAuthorizedAdminInput
): Promise<DeleteAuthorizedAdminOutput> => {
  const { authorized_admin_id } = props;
  return await db.authorizedAdmin.delete({ where: { authorized_admin_id } });
};

export const revokeAdminRole = async (email: string) => {
  const user = await fetchUser(email);

  if (user) {
    await db.user.update({
      where: { email },
      data: { role: { connect: { name: "USER" } } }
    });
  }
};
