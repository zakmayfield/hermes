"use server";

import { db } from "@/lib/prisma";
import { hasPermission } from "@/shared/permissionValidators";
import { $Enums, Onboarding, User } from "@prisma/client";

export type FetchUnapprovedUsersOutput = Omit<User, "password">[];

export const fetchUnapprovedUsers = async (): Promise<FetchUnapprovedUsersOutput> => {
  return await db.user.findMany({
    where: { role: { name: "USER" }, AND: { onboarding: { is_approved: false } } }
  });
};

export type ToggleUserApprovalInput = string;
export type ToggleUserApprovalOutput = Onboarding;

export const toggleUserApproval = async (
  user_id: ToggleUserApprovalInput
): Promise<ToggleUserApprovalOutput> => {
  if (await hasPermission($Enums.Permissions.APPROVE_USER)) {
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
