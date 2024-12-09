"use server";

import { db } from "@/lib/prisma";
import { Product } from "@prisma/client";

export const getProductsFromOrderId = async (orderId: string): Promise<Product[]> => {
  try {
    return await db.product.findMany({
      where: { orderItems: { some: { orderId } } }
    });
  } catch (error) {
    throw new Error("Unable to get products");
  }
};
