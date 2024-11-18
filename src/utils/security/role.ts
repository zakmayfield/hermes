"use server";

import { $Enums } from "@prisma/client";

export const validateRoles = async (roles: $Enums.Roles[], userRole?: $Enums.Roles) => {
  if (!userRole) {
    return { hasValidRole: false };
  }

  const hasValidRole = roles.includes(userRole);

  return { hasValidRole };
};
