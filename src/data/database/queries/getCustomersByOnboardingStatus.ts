"use server";

import { db } from "@/lib/prisma";
import { $Enums, OnboardingStatus } from "@prisma/client";
import { UserWithOnboardingStatus } from "../models/User";

export const getCustomersByOnboardingStatus = async ({
  status
}: {
  status: OnboardingStatus;
}): Promise<UserWithOnboardingStatus[]> => {
  try {
    const customers = await db.user.findMany({
      where: {
        role: { name: $Enums.Roles.CUSTOMER },
        AND: { onboarding: { status } }
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
    throw new Error("Unable to get users");
  }
};
