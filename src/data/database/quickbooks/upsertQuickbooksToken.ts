"use server";

import { db } from "@/lib/prisma";
import { encrypt, formatUpsertQbTokenPayload } from "@/utils/qb";
import { QuickbooksToken } from "@prisma/client";
import { z } from "zod";
import { tokenValidators } from "@/data/qb/validators";

export const upsertQuickbooksToken = async ({
  userId,
  realmId,
  token
}: {
  userId: string;
  realmId: string;
  token: z.infer<typeof tokenValidators.accessToken>;
}): Promise<QuickbooksToken> => {
  const eat = await encrypt(token.access_token);
  const ert = await encrypt(token.refresh_token);

  const upsertPayload = await formatUpsertQbTokenPayload({
    userId,
    realmId,
    encryptedTokens: { accessToken: eat, refreshToken: ert },
    expiration: {
      accessExp: token.expires_in,
      refreshExp: token.x_refresh_token_expires_in
    }
  });

  try {
    return await db.quickbooksToken.upsert({
      where: { userId },
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
