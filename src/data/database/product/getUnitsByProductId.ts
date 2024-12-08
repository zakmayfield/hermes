"use server";

import { db } from "@/lib/prisma";
import { Unit } from "@prisma/client";

export const getUnitsByProductId = async (productId: string): Promise<Unit[]> => {
  try {
    const units = await db.unit.findMany({ where: { productId } });
    return units;
  } catch (error) {
    throw new Error("Unable to get unit data");
  }
};
