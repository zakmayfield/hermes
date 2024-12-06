import { isUserAuthenticated } from "@/data/session";
import { handleTokenRefresh } from "@/data/qb/token";
import { redirect } from "next/navigation";
import { validateTokenExp } from "@/utils/qb";
import { getQuickbooksTokens } from "@/data/database/quickbooks";

export default async function Layout({
  children,
  auth_prompt
}: {
  children: React.ReactNode;
  auth_prompt: React.ReactNode;
}) {
  const isAuth = await isUserAuthenticated();
  if (!isAuth) {
    redirect("/dashboard");
  }

  const qbToken = await getQuickbooksTokens();
  const { refreshToken } = await validateTokenExp(qbToken);

  if (qbToken && refreshToken.isExpired) {
    await handleTokenRefresh(qbToken);
  }

  return <div>{!qbToken ? auth_prompt : children}</div>;
}
