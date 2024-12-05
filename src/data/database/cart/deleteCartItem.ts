"use server";

import { Cart, CartItem } from "@prisma/client";
import { getCart } from "./getCart";
import { db } from "@/lib/prisma";

export const deleteCartItem = async ({
  unitId
}: {
  unitId: string;
}): Promise<CartItem> => {
  try {
    const cart = await getCart<Cart>({ select: { cartId: true } });

    const deletedItem = await db.cartItem.delete({
      where: {
        cartId_unitId: {
          cartId: cart.cartId,
          unitId
        }
      }
    });

    return deletedItem;
  } catch (error) {
    throw new Error("Unable to remove cart item");
  }
};
