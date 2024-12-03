"use server";

import { $Enums } from "@prisma/client";

export const hasValidRole = async (roles: $Enums.Roles[], userRole?: $Enums.Roles) => {
  if (!userRole) {
    return false;
  }

  return roles.includes(userRole);
};
