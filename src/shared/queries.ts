"use server";

import { getAuthSession } from "@/lib/auth/auth.options";
import { db } from "@/lib/prisma";

export const fetchRoles = async () => {
  const roles = await db.role.findMany();
  return roles;
};

export const fetchUserRoles = async () => {
  const user_id = await getAuthSession().then((session) => session?.user.id);

  const user_roles = await db.role.findMany({
    where: {
      user_roles: {
        some: {
          user_id
        }
      }
    }
  });

  return user_roles;
};
