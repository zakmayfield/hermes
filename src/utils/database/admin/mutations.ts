"use server";
import {
  AddAuthorizedAdminInput,
  AddAuthorizedAdminOutput
} from "@/features/admin-authorization/AdminAuthorization";
import { db } from "@/lib/prisma";
import { $Enums } from "@prisma/client";

export const addAuthorizedAdmin = async ({
  email
}: AddAuthorizedAdminInput): Promise<AddAuthorizedAdminOutput> => {
  try {
    if (await db.user.findFirst({ where: { email } })) {
      // Check if user exists with respective email, toggle ADMIN role if so
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
