"use server";

import { db } from "@/lib/prisma";
import { Prisma, Unit } from "@prisma/client";

export const getUnits = async <ReturnData extends Unit[]>(options?: {
  take?: number;
  skip?: number;
  where?: Prisma.UnitWhereInput;
  include?: Prisma.UnitInclude;
  select?: Prisma.UnitInclude;
}): Promise<ReturnData> => {
  try {
    const { take, skip, where, include, select } = options || {};

    const units = include
      ? await db.unit.findMany({ take, skip, where, include })
      : await db.unit.findMany({ take, skip, where, select });

    return units as ReturnData;
  } catch (error) {
    throw new Error("Unable to get units");
  }
};
