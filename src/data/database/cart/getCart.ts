"use server";

import { getCoreSessionUserOrThrow } from "@/data/session";
import { db } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export const getCart = async <ReturnData>(options: {
  include?: Prisma.CartInclude;
  select?: Prisma.CartSelect;
}): Promise<ReturnData> => {
  try {
    const { id } = await getCoreSessionUserOrThrow();

    const { include, select } = options;
    const cart = options.include
      ? await db.cart.findUnique({ where: { userId: id }, include })
      : await db.cart.findUnique({ where: { userId: id }, select });

    return cart as ReturnData;
  } catch (error) {
    throw new Error("Unexpected Server Error");
  }
};
