"use server";

import { getAuthSession } from "@/lib/auth/auth.options";

export const getAllProducts = async () => {
  try {
    const session = await getAuthSession();

    const res = await fetch("http://localhost:3000/api/quickbooks/products", {
      headers: {
        "Content-type": "application/json",
        "x-user-id": session?.user.id!
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
