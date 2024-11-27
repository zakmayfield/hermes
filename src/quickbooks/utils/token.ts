"use server";

import { QuickbooksToken } from "@prisma/client";
import { UpsertToken } from "../types/token";
import { getQBTokens } from "../services/token";

export const hasQbTokens = async (): Promise<boolean> => {
  return !!(await getQBTokens());
};

export const validateTokenExpiration = async (payload: QuickbooksToken | null) => {
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

type EncryptedTokenData = {
  iv: string;
  encrypted: string;
};

export const formatUpsertTokenPayload = async ({
  user_id,
  realm_id,
  encryptedTokens: { accessToken, refreshToken },
  expiration: { accessExp, refreshExp }
}: {
  user_id: string;
  realm_id: string;
  encryptedTokens: {
    accessToken: EncryptedTokenData;
    refreshToken: EncryptedTokenData;
  };
  expiration: {
    accessExp: number;
    refreshExp: number;
  };
}): Promise<UpsertToken> => {
  const getDate = (ms: number) => new Date(Date.now() + ms * 1000);

  return {
    user_id,
    realm_id,
    encrypted_access_token: accessToken.encrypted,
    access_token_iv: accessToken.iv,
    encrypted_refresh_token: refreshToken.encrypted,
    refresh_token_iv: refreshToken.iv,
    access_token_expiration_time: getDate(accessExp),
    refresh_token_expiration_time: getDate(refreshExp)
  };
};
