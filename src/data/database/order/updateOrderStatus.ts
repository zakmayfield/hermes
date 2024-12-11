"use server";

import { db } from "@/lib/prisma";
import { $Enums } from "@prisma/client";

export const updateOrderStatus = async (
  orderId: string,
  orderStatus: $Enums.OrderStatus
) => {
  try {
    return await db.order.update({
      where: { orderId },
      data: {
        status: orderStatus
      }
    });
  } catch (error) {
    throw new Error("Unable to update order status");
  }
};
