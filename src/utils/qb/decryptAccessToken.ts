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
    qbToken.encrypted_access_token,
    qbToken.access_token_iv
  );

  return { realmId: qbToken.realm_id, accessToken: decryptedAccessToken };
};
