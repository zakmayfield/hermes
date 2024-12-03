"use server";

import { db } from "@/lib/prisma";
import { $Enums } from "@prisma/client";
import { UserWithOnboardingStatus } from "../models/User";

export const getCustomersByIsApproved = async ({
  is_approved
}: {
  is_approved: boolean;
}): Promise<UserWithOnboardingStatus[]> => {
  try {
    const customers = await db.user.findMany({
      where: {
        role: { name: $Enums.Roles.CUSTOMER },
        AND: { onboarding: { is_approved } }
      },
      include: {
        onboarding: {
          select: {
            status: true
          }
        }
      },
      orderBy: { created_at: "asc" }
    });

    return customers;
  } catch (error) {
    throw new Error("Unable to get customers");
  }
};
