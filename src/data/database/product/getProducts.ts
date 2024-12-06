"use server";

import { db } from "@/lib/prisma";
import { Prisma, Product } from "@prisma/client";

export const getProducts = async <ReturnData extends Product[]>(options?: {
  take?: number;
  skip?: number;
  where?: Prisma.ProductWhereInput;
  include?: Prisma.ProductInclude;
  select?: Prisma.ProductInclude;
}): Promise<ReturnData> => {
  try {
    const { take, skip, where, include, select } = options || {};

    const products = include
      ? await db.product.findMany({ take, skip, where, include })
      : await db.product.findMany({ take, skip, where, select });

    return products as ReturnData;
  } catch (error) {
    throw new Error("Unable to get products");
  }
};
