"use server";

import { handleTokenRefresh } from "@/data/qb/services/token";
import { decrypt } from "@/utils/qb";
import { validateTokenExp } from "./validateTokenExp";
import { getQuickbooksTokensOrThrow } from "@/data/database/queries";

export const handleDecryptAccessToken = async () => {
  let qbToken = await getQuickbooksTokensOrThrow();

  const { accessToken } = await validateTokenExp(qbToken);

  if (accessToken.isExpired) {
    await handleTokenRefresh(qbToken);
    qbToken = await getQuickbooksTokensOrThrow();
  }

  const decryptedAccessToken = await decrypt(
    qbToken.encryptedAccessToken,
    qbToken.accessTokenIv
  );

  return { realmId: qbToken.realmId, accessToken: decryptedAccessToken };
};
