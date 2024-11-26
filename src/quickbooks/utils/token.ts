"use server";

import * as crypto from "crypto";
import { QuickbooksToken } from "@prisma/client";
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

export const isTokenExpired = async (
  type: "access" | "refresh",
  tokenRecord: QuickbooksToken | null
): Promise<{
  isValidToken: boolean;
  isExpired: boolean | null;
}> => {
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
