"use server";

import { db } from "@/lib/prisma";
import { Onboarding, User } from "@prisma/client";

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
  return await db.onboarding.update({
    where: { user_id },
    data: {
      is_approved: true
    }
  });
};
