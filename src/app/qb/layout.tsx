import {
  createOrUpdateQBTokens,
  getQBTokens,
  refreshAccessToken
} from "@/quickbooks/services/token";
import { decrypt, encrypt, isTokenExpired } from "@/quickbooks/utils/token";
import { getUserAuth } from "@/utils/auth";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
  auth_prompt,
  expired_session
}: {
  children: React.ReactNode;
  auth_prompt: React.ReactNode;
  expired_session: React.ReactNode;
}) {
  const userAuth = await getUserAuth();
  if (!userAuth) {
    redirect("/dashboard");
  }

  const { id } = userAuth;
  const qbToken = await getQBTokens();
  const accessToken = await isTokenExpired("access", qbToken);
  const refreshToken = await isTokenExpired("refresh", qbToken);

  if (qbToken && refreshToken.isExpired) {
    const decryptedRefreshToken = await decrypt(
      qbToken.encrypted_refresh_token,
      qbToken.refresh_token_iv
    );

    const refreshedTokens = await refreshAccessToken(decryptedRefreshToken);

    if (refreshedTokens) {
      const eat = await encrypt(refreshedTokens.access_token);
      const ert = await encrypt(refreshedTokens.refresh_token);

      await createOrUpdateQBTokens({
        user_id: id,
        realm_id: qbToken.realm_id,
        encrypted_access_token: eat.encrypted,
        access_token_iv: eat.iv,
        encrypted_refresh_token: ert.encrypted,
        refresh_token_iv: ert.iv,
        access_token_expiration_time: new Date(
          Date.now() + refreshedTokens.expires_in * 1000
        ),
        refresh_token_expiration_time: new Date(
          Date.now() + refreshedTokens.x_refresh_token_expires_in * 1000
        )
      });

      redirect("/qb/customer");
    }
  }

  return (
    <div>
      {!qbToken
        ? auth_prompt
        : refreshToken.isValidToken && refreshToken.isExpired
        ? expired_session
        : children}
    </div>
  );
}
