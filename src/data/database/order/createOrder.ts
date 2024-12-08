"use server";

import { getCoreSessionUserOrThrow } from "@/data/session";
import { db } from "@/lib/prisma";
import { Order, CartItem, OrderItem } from "@prisma/client";

export const createOrder = async ({
  cartItems
}: {
  cartItems: CartItem[];
}): Promise<Order & { items: OrderItem[] }> => {
  const { id } = await getCoreSessionUserOrThrow();

  try {
    const orderItems = cartItems.map((ci) => ({
      productId: ci.productId,
      quantity: ci.quantity
    }));

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
    console.error(error);
    throw new Error("Unable to create order");
  }
};
