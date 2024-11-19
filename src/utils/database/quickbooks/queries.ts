"use server";

import { getAuthSession } from "@/lib/auth/auth.options";
import { db } from "@/lib/prisma";

export const getQuickbooksToken = async (user_id: string) => {
  return await db.quickbooksToken.findUnique({
    where: { user_id }
  });
};

export const getAllProducts = async () => {
  try {
    const session = await getAuthSession();

    const res = await fetch("http://localhost:3000/api/quickbooks/products", {
      headers: {
        "Content-type": "application/json",
        "x-user-id": session?.user.id || ""
      }
    });

    return res.json();
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
      throw new Error("Unable to get products");
    }
    console.log(error);
    throw new Error("Unexpected server error");
  }
};
