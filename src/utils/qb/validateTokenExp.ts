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

  const isAccessTokenExpired = currentDate > payload.accessTokenExpirationTime;
  const isRefreshTokenExpired = currentDate > payload.refreshTokenExpirationTime;

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
