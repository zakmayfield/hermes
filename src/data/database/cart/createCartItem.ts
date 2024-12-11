"use server";

import { db } from "@/lib/prisma";
import { getCart } from "./getCart";
import { CartItem } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { getCartItem } from "./getCartItem";
import { upsertCartItem } from "./upsertCartItem";

export const createCartItem = async (productId: string): Promise<CartItem> => {
  const cart = await getCart();

  try {
    const cartItem = await db.cartItem.create({
      data: {
        cartId: cart.cartId,
        productId,
        quantity: 1
      }
    });

    return cartItem;
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        const cartItem = await getCartItem(cart.cartId, productId);
        return await upsertCartItem({ productId, quantity: cartItem.quantity + 1 });
      }
    }
    throw new Error("Unable to create cart item");
  }
};
