"use server";

import { QuickbooksToken } from "@prisma/client";

export const validateTokenExp = async (payload: QuickbooksToken | null) => {
  const currentDate = new Date();

  if (!payload) {
    return {
      accessToken: {
        isValid: false,
        isExpired: null
      },
      refreshToken: {
        isValid: false,
        isExpired: null
      }
    };
  }

  const isAccessTokenExpired = currentDate > payload.access_token_expiration_time;
  const isRefreshTokenExpired = currentDate > payload.refresh_token_expiration_time;

  return {
    accessToken: {
      isValid: true,
      isExpired: isAccessTokenExpired
    },
    refreshToken: {
      isValid: true,
      isExpired: isRefreshTokenExpired
    }
  };
};
