"use server";

import { QuickbooksToken } from "@prisma/client";

export const isTokenExpired = async (
  tokenRecord: QuickbooksToken,
  type: "access" | "refresh"
) => {
  const currentDate = new Date();

  switch (type) {
    case "access":
      return currentDate > tokenRecord?.access_token_expiration_time ? true : false;
    case "refresh":
      return currentDate > tokenRecord?.refresh_token_expiration_time ? true : false;
  }
};
