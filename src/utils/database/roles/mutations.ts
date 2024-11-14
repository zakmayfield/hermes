"use server";

import { getAuthSession } from "@/lib/auth/auth.options";
import { db } from "@/lib/prisma";
import { Roles } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const changeRole = async (data: FormData) => {
  const session = await getAuthSession();
  const form_value = data.get("role") as Roles;

  const user_id = session?.user.id as string;

  await db.user.update({
    where: { id: user_id },
    data: { role: { connect: { name: form_value } } }
  });

  revalidatePath("/dashboard", "layout");
};
