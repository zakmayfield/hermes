"use server";

import { db } from "@/lib/prisma";
import { Prisma, ProductGroup } from "@prisma/client";

export const getProducts = async <ReturnData extends ProductGroup[]>(options?: {
  take?: number;
  skip?: number;
  where?: Prisma.ProductGroupWhereInput;
  include?: Prisma.ProductGroupInclude;
  select?: Prisma.ProductGroupSelect;
}): Promise<{ products: ReturnData; totalCount: number }> => {
  try {
    const { take, skip, where, include, select } = options || {};

    const products = options?.include
      ? await db.productGroup.findMany({ take, skip, where, include })
      : await db.productGroup.findMany({ take, skip, where, select });

    const totalCount = await db.productGroup.count({ where });

    return { products: products as ReturnData, totalCount };
  } catch (error) {
    console.error(error);
    throw new Error("Unable to get products");
  }
};
