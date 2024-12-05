"use server";

import { db } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export const getUsers = async <ReturnData>({
  options
}: {
  options?: {
    take?: number;
    skip?: number;
    where?: Prisma.UserWhereInput;
    include?: Prisma.UserInclude;
    select?: Prisma.UserSelect;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  };
}): Promise<ReturnData> => {
  const { include, select, ...rest } = options || {};

  return include
    ? ((await db.user.findMany({
        ...rest,
        include
      })) as ReturnData)
    : ((await db.user.findMany({
        ...rest,
        select
      })) as ReturnData);
};
