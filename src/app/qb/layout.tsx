import { getQBTokens, handleTokenRefresh } from "@/quickbooks/services/token";
import { validateTokenExpiration } from "@/quickbooks/utils/token";
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

  const qbToken = await getQBTokens();
  const { refreshToken } = await validateTokenExpiration(qbToken);

  if (qbToken && refreshToken.isExpired) {
    await handleTokenRefresh(qbToken);
  }

  return (
    <div>
      {!qbToken
        ? auth_prompt
        : refreshToken.isValid && refreshToken.isExpired
        ? expired_session
        : children}
    </div>
  );
}
