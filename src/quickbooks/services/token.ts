"use server";

import { db } from "@/lib/prisma";
import { getUserAuthOrThrow } from "@/utils/auth";
import { decryptToken, encryption_password } from "@/utils/security/encryption";
import { QuickbooksToken } from "@prisma/client";
import { CreateQBTokensPayload } from "../types";

// TOKENS
export const getQBTokens = async (): Promise<QuickbooksToken | null> => {
  const { id } = await getUserAuthOrThrow();

  const qbToken = await db.quickbooksToken.findUnique({ where: { user_id: id } });
  if (!qbToken) {
    return null;
  }

  return qbToken;
};

export const getQBTokensOrThrow = async (): Promise<QuickbooksToken> => {
  try {
    const qbTokens = await getQBTokens();
    if (!qbTokens) {
      throw new Error("Could not locate QB tokens");
    }

    return qbTokens;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw new Error(error.message);
    }

    console.error(error);
    throw new Error("Unexpected Server Error");
  }
};

export const getDecryptedQBTokensOrThrow = async (): Promise<{
  access_token: string;
  refresh_token: string;
}> => {
  try {
    const qbTokens = await getQBTokensOrThrow();

    const decryptedAccessToken = decryptToken(
      qbTokens?.encrypted_access_token,
      encryption_password,
      qbTokens?.access_token_iv
    );

    const decryptedRefreshToken = decryptToken(
      qbTokens?.encrypted_refresh_token,
      encryption_password,
      qbTokens?.refresh_token_iv
    );

    return {
      access_token: decryptedAccessToken,
      refresh_token: decryptedRefreshToken
    };
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw new Error(error.message);
    }

    console.error(error);
    throw new Error("Unexpected Server Error");
  }
};

export const createOrUpdateQBTokens = async ({
  tokenPayload
}: {
  tokenPayload: CreateQBTokensPayload;
}): Promise<QuickbooksToken> => {
  try {
    return await db.quickbooksToken.upsert({
      where: { user_id: tokenPayload.user_id },
      update: { ...tokenPayload },
      create: { ...tokenPayload }
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw new Error(error.message);
    }

    console.error(error);
    throw new Error("Unexpected Server Error");
  }
};
