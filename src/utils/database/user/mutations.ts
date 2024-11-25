"use server";

import { db } from "@/lib/prisma";
import { hasPermission } from "@/utils/validators/permissionValidator";
import { $Enums, Onboarding } from "@prisma/client";

export type ToggleUserApprovalInput = string;
export type ToggleUserApprovalOutput = Onboarding;

export const toggleUserApproval = async (
  user_id: ToggleUserApprovalInput
): Promise<ToggleUserApprovalOutput> => {
  if (await hasPermission($Enums.Permissions.APPROVE_CUSTOMER)) {
    try {
      return await db.onboarding.update({
        where: { user_id },
        data: {
          is_approved: true
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
