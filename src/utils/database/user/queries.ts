"use server";
import { getAuthSession } from "@/lib/auth/auth.options";
import { db } from "@/lib/prisma";
import { $Enums } from "@prisma/client";

export const getUnapprovedUsers = async () => {
  try {
    return await db.user.findMany({
      where: {
        role: { name: $Enums.Roles.USER },
        AND: { onboarding: { is_approved: false } }
      },
      orderBy: { created_at: "asc" }
    });
  } catch (error) {
    throw new Error("Unable to get users");
  }
};

export const getOnboardPendingUsers = async () => {
  try {
    return await db.user.findMany({
      where: {
        role: { name: $Enums.Roles.USER },
        AND: { onboarding: { status: "PENDING" } }
      },
      orderBy: { created_at: "asc" }
    });
  } catch (error) {
    throw new Error("Unable to get users");
  }
};

export const getRecentUsers = async (dateRange: 1 | 3 | 7) => {
  const dayInMs = 1 * 24 * 60 * 60 * 1000;

  const today = new Date();
  const selectedRangeDate = new Date(today.getTime() - dateRange * dayInMs);

  try {
    return await db.user.findMany({
      where: {
        role: { name: $Enums.Roles.USER },
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

export const getUsersByRole = async (role: $Enums.Roles) => {
  return await db.user.findMany({ where: { role: { name: role } } });
};

export const getUserById = async (id: string) => {
  return await db.user.findUnique({ where: { id } });
};

export const getUserByEmail = async (email: string) => {
  return await db.user.findUnique({ where: { email } });
};

export const getAuthUserRole = async () => {
  const email = await getAuthSession().then((session) => session?.user.email);

  return await db.user
    .findUnique({
      where: { email },
      select: { role: true }
    })
    .then((u) => u?.role.name);
};

export const getUserPermissionsById = async (user_id: string) => {
  return await db.permission.findMany({
    where: { user_permissions: { some: { user_id } } },
    include: { user_permissions: { select: { granted_at: true } } }
  });
};
