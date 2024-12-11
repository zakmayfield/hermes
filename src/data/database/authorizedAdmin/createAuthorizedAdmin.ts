"use server";

import { db } from "@/lib/prisma";
import { $Enums, AuthorizedAdmin } from "@prisma/client";

export const createAuthorizedAdmin = async ({
  email
}: {
  email: string;
}): Promise<AuthorizedAdmin> => {
  try {
    // Check if user exists with respective email, toggle ADMIN role if so
    if (await db.user.findFirst({ where: { email } })) {
      await db.user.update({
        where: { email },
        data: { role: { connect: { name: $Enums.Roles.ADMIN } } }
      });
    }

    // Add email to authorized admin list
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
