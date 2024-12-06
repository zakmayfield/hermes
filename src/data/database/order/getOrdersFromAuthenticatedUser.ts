"use server";

import { getCoreSessionUserOrThrow } from "@/data/session";
import { db } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export const getOrdersFromAuthenticatedUser = async <ReturnData>(options: {
  include?: Prisma.OrderInclude;
  select?: Prisma.OrderSelect;
}): Promise<ReturnData> => {
  try {
    const { id } = await getCoreSessionUserOrThrow();

    const { include, select } = options;
    const order = options.include
      ? await db.order.findMany({ where: { userId: id }, include })
      : await db.order.findMany({ where: { userId: id }, select });

    return order as ReturnData;
  } catch (error) {
    throw new Error("Unable to get order");
  }
};
