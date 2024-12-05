"use server";

import { getCoreSessionUserOrThrow } from "@/data/session";
import { db } from "@/lib/prisma";
import { Order, CartItem, OrderItem } from "@prisma/client";

export const createOrder = async ({
  cartItems
}: {
  cartItems: CartItem[];
}): Promise<Order & { items: OrderItem[] }> => {
  try {
    const { id } = await getCoreSessionUserOrThrow();

    const orderItems = cartItems.map((ci) => ({ cartItemId: ci.cartItemId }));

    const order = await db.order.create({
      data: {
        userId: id,
        items: {
          createMany: {
            data: orderItems
          }
        }
      },
      include: {
        items: true
      }
    });

    return order;
  } catch (error) {
    throw new Error("Unable to create order");
  }
};
