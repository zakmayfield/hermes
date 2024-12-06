"use server";

import { db } from "@/lib/prisma";

export const getUnitById = async (unitId: string) => {
  try {
    const unit = await db.unit.findUniqueOrThrow({ where: { unitId } });
    return unit;
  } catch (error) {
    throw new Error("Unable to get unit data");
  }
};
