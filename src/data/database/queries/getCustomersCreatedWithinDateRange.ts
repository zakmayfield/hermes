"use server";

import { db } from "@/lib/prisma";
import { $Enums } from "@prisma/client";

export const getCustomersCreatedWithinDateRange = async ({
  dateRange
}: {
  dateRange: 1 | 3 | 7;
}) => {
  const dayInMs = 1 * 24 * 60 * 60 * 1000;

  const today = new Date();
  const selectedRangeDate = new Date(today.getTime() - dateRange * dayInMs);

  try {
    return await db.user.findMany({
      where: {
        role: { name: $Enums.Roles.CUSTOMER },
        AND: { created_at: { gt: selectedRangeDate } }
      },
      orderBy: { created_at: "desc" }
    });
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("Unable to fetch recent users");
    }

    throw new Error("Server error");
  }
};
