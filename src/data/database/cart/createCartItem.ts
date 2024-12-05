"use server";

import { db } from "@/lib/prisma";
import { getCart } from "./getCart";
import { Cart, CartItem } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export const createCartItem = async ({
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

    const cartItem = await db.cartItem.create({
      data: {
        cartId: cart.cartId,
        unitId,
        quantity
      }
    });

    return cartItem;
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        throw new Error("This item is already in your cart");
      }
    }
    throw new Error("Unable to create cart item");
  }
};
