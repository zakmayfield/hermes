"use server";

import { db } from "@/lib/prisma";
import { Prisma, ProductGroup } from "@prisma/client";

export const getProducts = async <ReturnData extends ProductGroup[]>(options?: {
  take?: number;
  skip?: number;
  where?: Prisma.ProductGroupWhereInput;
  include?: Prisma.ProductGroupInclude;
  select?: Prisma.ProductGroupSelect;
}): Promise<ReturnData> => {
  try {
    const { take, skip, where, include, select } = options || {};

    const products = options?.include
      ? await db.productGroup.findMany({ take, skip, where, include })
      : await db.productGroup.findMany({ take, skip, where, select });

    return products as ReturnData;
  } catch (error) {
    throw new Error("Unable to get products");
  }
};
