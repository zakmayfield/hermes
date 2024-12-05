"use server";

import { db } from "@/lib/prisma";
import { getCart } from "./getCart";
import { Cart, CartItem } from "@prisma/client";

export const upsertCartItem = async ({
  unitId,
  quantity
}: {
  unitId: string;
  quantity: number;
}): Promise<CartItem> => {
  try {
    const cart = await getCart<Cart>({
      select: { cartId: true }
    });

    const cartItem = await db.cartItem.upsert({
      where: {
        cartId_unitId: {
          cartId: cart.cartId,
          unitId
        }
      },
      create: {
        quantity,
        unitId,
        cartId: cart.cartId
      },
      update: {
        quantity
      }
    });

    return cartItem;
  } catch (error) {
    throw new Error("Unable to update cart item");
  }
};
