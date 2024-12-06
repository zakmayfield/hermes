"use server";

import { db } from "@/lib/prisma";

export const getProductById = async (productId: string) => {
  try {
    const product = await db.product.findUnique({ where: { productId } });
    return product;
  } catch (error) {
    throw new Error("Unable to get product data");
  }
};
