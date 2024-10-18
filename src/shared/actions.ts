"use server";

import { getAuthSession } from "@/lib/auth/auth.options";
import { db } from "@/lib/prisma";
import { Roles } from "@prisma/client";
import { revalidatePath } from "next/cache";

type TogglePermissionLevel = {
  role_id: string;
  permission_id: string;
  permission_level: number;
};

export const togglePermissionLevel = async (payload: TogglePermissionLevel) => {
  const { role_id, permission_id, permission_level } = payload;

  function toggle() {
    return !permission_level ? { increment: 1 } : { decrement: 1 };
  }

  return await db.rolePermissions.update({
    where: { role_id_permission_id: { role_id, permission_id } },
    data: { permission_level: toggle() }
  });
};

export const changeRole = async (data: FormData) => {
  const session = await getAuthSession();
  const form_value = data.get("role") as Roles;

  const user_id = session?.user.id as string;

  const roles = await db.role.findMany();

  await db.userRoles.deleteMany({
    where: { user_id: session?.user.id }
  });

  if (form_value === "USER") {
    await db.userRoles.create({
      data: {
        user_id,
        role_id: roles.find((role) => role.name === form_value)?.role_id as string
      }
    });
  }

  if (form_value === "ADMIN") {
    await db.userRoles.createMany({
      data: [
        {
          user_id,
          role_id: roles.find((role) => role.name === "USER")?.role_id as string
        },
        {
          user_id,
          role_id: roles.find((role) => role.name === form_value)?.role_id as string
        }
      ]
    });
  }

  if (form_value === "SUPER") {
    await db.userRoles.createMany({
      data: [
        {
          user_id,
          role_id: roles.find((role) => role.name === "USER")?.role_id as string
        },
        {
          user_id,
          role_id: roles.find((role) => role.name === "ADMIN")?.role_id as string
        },
        {
          user_id,
          role_id: roles.find((role) => role.name === form_value)?.role_id as string
        }
      ]
    });
  }

  revalidatePath("/dashboard", "layout");
};
