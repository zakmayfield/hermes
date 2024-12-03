type UpsertToken = {
  user_id: string;
  realm_id: string;
  encrypted_access_token: string;
  encrypted_refresh_token: string;
  access_token_expiration_time: Date;
  refresh_token_expiration_time: Date;
  access_token_iv: string;
  refresh_token_iv: string;
};

type EncryptedTokenData = {
  iv: string;
  encrypted: string;
};

export const formatUpsertQbTokenPayload = async ({
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
