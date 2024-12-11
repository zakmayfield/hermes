"use server";

import { db } from "@/lib/prisma";

export const getProductsFromCart = async (cartId?: string) => {
  try {
    return await db.product.findMany({
      where: { cartItems: { some: { cartId } } }
    });
  } catch (error) {
    throw new Error("Unable to get products");
  }
};
