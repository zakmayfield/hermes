"use server";

import { db } from "@/lib/prisma";

export const getUnitsFromOrderId = async (orderId: string) => {
  try {
    const units = await db.unit.findMany({
      where: { orderItems: { some: { orderId } } }
    });

    return units;
  } catch (error) {
    throw new Error("Unable to get units");
  }
};
