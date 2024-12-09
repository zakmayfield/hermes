"use server";

import { db } from "@/lib/prisma";
import { $Enums, Onboarding } from "@prisma/client";
import { hasPermission } from "@/data/database/permission";

type ToggleUserApprovalInput = string;
type ToggleUserApprovalOutput = Onboarding;

export const toggleUserIsApproved = async (
  userId: ToggleUserApprovalInput
): Promise<ToggleUserApprovalOutput> => {
  if (await hasPermission($Enums.Permissions.APPROVE_CUSTOMER)) {
    try {
      return await db.onboarding.update({
        where: { userId },
        data: {
          isApproved: true
        }
      });
    } catch (error) {
      if (error instanceof Error) {
        throw new Error("Unable to approve user at this time");
      }

      throw new Error("Server error");
    }
  } else {
    throw new Error("Permission denied. Please request access from an administrator.");
  }
};
