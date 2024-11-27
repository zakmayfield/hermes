"use server";

import { db } from "@/lib/prisma";
import { Token } from "@/quickbooks/types/token";
import { encrypt, formatUpsertTokenPayload } from "@/quickbooks/utils/token";
import { getUserAuthOrThrow } from "@/utils/auth";
import { QuickbooksToken } from "@prisma/client";

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

export const handleUpsertTokenData = async ({
  user_id,
  realm_id,
  token
}: {
  user_id: string;
  realm_id: string;
  token: Token;
}): Promise<QuickbooksToken> => {
  const eat = await encrypt(token.access_token);
  const ert = await encrypt(token.refresh_token);

  const upsertPayload = await formatUpsertTokenPayload({
    user_id,
    realm_id,
    encryptedTokens: { accessToken: eat, refreshToken: ert },
    expiration: {
      accessExp: token.expires_in,
      refreshExp: token.x_refresh_token_expires_in
    }
  });

  try {
    return await db.quickbooksToken.upsert({
      where: { user_id },
      update: { ...upsertPayload },
      create: { ...upsertPayload }
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
