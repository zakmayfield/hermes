"use server";

import { db } from "@/lib/prisma";
import { CartItem } from "@prisma/client";

export const getCartItem = async (cartId: string, unitId: string): Promise<CartItem> => {
  try {
    const cartItem = await db.cartItem.findUniqueOrThrow({
      where: {
        cartId_unitId: {
          cartId,
          unitId
        }
      }
    });

    return cartItem;
  } catch (error) {
    throw new Error("Unable to get cart item");
  }
};
