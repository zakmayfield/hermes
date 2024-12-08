"use server";

import { db } from "@/lib/prisma";
import { CartItem } from "@prisma/client";

export const getCartItem = async (
  cartId: string,
  productId: string
): Promise<CartItem> => {
  try {
    const cartItem = await db.cartItem.findUniqueOrThrow({
      where: {
        cartId_productId: {
          cartId,
          productId
        }
      }
    });

    return cartItem;
  } catch (error) {
    throw new Error("Unable to get cart item");
  }
};
