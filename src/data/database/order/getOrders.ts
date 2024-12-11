"use server";

import { db } from "@/lib/prisma";
import { Order, Prisma } from "@prisma/client";

export const getOrders = async <ReturnData extends Order[]>(options?: {
  take?: number;
  skip?: number;
  where?: Prisma.OrderWhereInput;
  include?: Prisma.OrderInclude;
  select?: Prisma.OrderSelect;
}): Promise<ReturnData> => {
  try {
    const { take, skip, where, include, select } = options || {};

    const orders = options?.include
      ? await db.order.findMany({ take, skip, where, include })
      : await db.order.findMany({ take, skip, where, select });

    return orders as ReturnData;
  } catch (error) {
    throw new Error("Unable to get orders");
  }
};
