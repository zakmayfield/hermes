"use server";

import { getCoreSessionUserOrThrow } from "@/data/session";
import { db } from "@/lib/prisma";
import { Order, Prisma } from "@prisma/client";

export const getOrdersFromAuthenticatedUser = async <
  ReturnData extends Order[]
>(options: {
  take?: number;
  skip?: number;
  include?: Prisma.OrderInclude;
  select?: Prisma.OrderSelect;
}): Promise<ReturnData> => {
  const { id } = await getCoreSessionUserOrThrow();

  try {
    const { take, skip, include, select } = options;

    const orders = options.include
      ? await db.order.findMany({ take, skip, where: { userId: id }, include })
      : await db.order.findMany({ take, skip, where: { userId: id }, select });

    return orders as ReturnData;
  } catch (error) {
    throw new Error("Unable to get orders");
  }
};
