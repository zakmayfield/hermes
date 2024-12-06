"use server";

import { db } from "@/lib/prisma";
import { Unit } from "@prisma/client";

export const getUnitsFromOrderId = async (orderId: string): Promise<Unit[]> => {
  try {
    const units = await db.unit.findMany({
      where: { orderItems: { some: { orderId } } }
    });

    return units;
  } catch (error) {
    throw new Error("Unable to get units");
  }
};
