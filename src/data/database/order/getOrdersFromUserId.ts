"use server";

import { db } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export const getOrdersFromUserId = async <ReturnData>(options: {
  where?: Prisma.OrderWhereInput;
  include?: Prisma.OrderInclude;
  select?: Prisma.OrderSelect;
}): Promise<ReturnData> => {
  try {
    const { where, include, select } = options;
    const order = options.include
      ? await db.order.findMany({ where, include })
      : await db.order.findMany({ where, select });

    return order as ReturnData;
  } catch (error) {
    throw new Error("Unable to get order");
  }
};
