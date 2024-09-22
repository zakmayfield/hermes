"use server";

import { getAuthSession } from "@/lib/auth/auth.options";
import { db } from "@/lib/prisma";
import { Roles } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const changeRole = async (data: FormData) => {
  const session = await getAuthSession();
  const form_value = data.get("role") as Roles;

  const roles = await db.role.findMany();

  await db.userRoles.deleteMany({
    where: { user_id: session?.user.id }
  });

  if (form_value === "USER") {
    await db.userRoles.create({
      data: {
        user_id: session?.user.id!,
        role_id: roles.find((role) => role.name === form_value)?.role_id!
      }
    });
  }

  if (form_value === "ADMIN") {
    await db.userRoles.createMany({
      data: [
        {
          user_id: session?.user.id!,
          role_id: roles.find((role) => role.name === "USER")?.role_id!
        },
        {
          user_id: session?.user.id!,
          role_id: roles.find((role) => role.name === form_value)?.role_id!
        }
      ]
    });
  }

  if (form_value === "SUPER") {
    await db.userRoles.createMany({
      data: [
        {
          user_id: session?.user.id!,
          role_id: roles.find((role) => role.name === "USER")?.role_id!
        },
        {
          user_id: session?.user.id!,
          role_id: roles.find((role) => role.name === "ADMIN")?.role_id!
        },
        {
          user_id: session?.user.id!,
          role_id: roles.find((role) => role.name === form_value)?.role_id!
        }
      ]
    });
  }

  revalidatePath("/dashboard", "layout");
};
