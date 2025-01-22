"use server";

import { Cart } from "@prisma/client";
import { getCart } from "./getCart";
import { db } from "@/lib/prisma";

export const deleteAllCartItems = async (): Promise<number> => {
  try {
    const cart = await getCart<Cart>({ select: { cartId: true } });

    await db.cartItem.deleteMany({
      where: {
        cartId: cart.cartId
      }
    });

    return 1;
  } catch (error) {
    throw new Error("Unable to remove cart items");
  }
};
