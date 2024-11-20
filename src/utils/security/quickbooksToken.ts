"use server";

import { QuickbooksToken } from "@prisma/client";

type ResponseType = {
  isValidToken: boolean;
  isExpired: boolean | null;
};

export const isTokenExpired = async (
  type: "access" | "refresh",
  tokenRecord: QuickbooksToken | null
): Promise<ResponseType> => {
  const currentDate = new Date();

  if (!tokenRecord) {
    return {
      isValidToken: false,
      isExpired: null
    };
  }

  switch (type) {
    case "access":
      return {
        isValidToken: true,
        isExpired: currentDate > tokenRecord?.access_token_expiration_time ? true : false
      };
    case "refresh":
      return {
        isValidToken: true,
        isExpired: currentDate > tokenRecord?.refresh_token_expiration_time ? true : false
      };
  }
};
