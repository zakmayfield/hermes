type UpsertToken = {
  userId: string;
  realmId: string;
  encryptedAccessToken: string;
  encryptedRefreshToken: string;
  accessTokenExpirationTime: Date;
  refreshTokenExpirationTime: Date;
  accessTokenIv: string;
  refreshTokenIv: string;
};

type EncryptedTokenData = {
  iv: string;
  encrypted: string;
};

export const formatUpsertQbTokenPayload = async ({
  userId,
  realmId,
  encryptedTokens: { accessToken, refreshToken },
  expiration: { accessExp, refreshExp }
}: {
  userId: string;
  realmId: string;
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
    userId,
    realmId,
    encryptedAccessToken: accessToken.encrypted,
    accessTokenIv: accessToken.iv,
    encryptedRefreshToken: refreshToken.encrypted,
    refreshTokenIv: refreshToken.iv,
    accessTokenExpirationTime: getDate(accessExp),
    refreshTokenExpirationTime: getDate(refreshExp)
  };
};
