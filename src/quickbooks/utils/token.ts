"use server";

import * as crypto from "crypto";
import { QuickbooksToken } from "@prisma/client";
import { UpsertToken } from "../types/token";
import { getQBTokens } from "../services/token";

const encryptPassword = process.env.ENCRYPTION_SECRET || "";
const encryptAlgo = process.env.ENCRYPTION_ALGO || "";

export const encrypt = async (str: string) => {
  const iv = crypto.randomBytes(16).toString("hex").slice(0, 16);
  let key = crypto
    .createHash("sha256")
    .update(String(encryptPassword))
    .digest("base64")
    .slice(0, 32);

  const cipher = crypto.createCipheriv(encryptAlgo, key, iv);

  let encrypted = cipher.update(str, "utf8", "hex");
  encrypted += cipher.final("hex");

  return { iv: iv, encrypted };
};

export const decrypt = async (encrypted: string, iv: string) => {
  const key = crypto
    .createHash("sha256")
    .update(String(encryptPassword))
    .digest("base64")
    .slice(0, 32);

  const decipher = crypto.createDecipheriv(encryptAlgo, key, iv);

  let decrypted = decipher.update(encrypted, "hex", "utf8");
  decrypted += decipher.final("utf8");

  return decrypted;
};

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
