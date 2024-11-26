import { getQBTokens } from "@/quickbooks/services/token";
import { isTokenExpired } from "@/quickbooks/utils/token";
import { redirect } from "next/navigation";

export default async function Default() {
  const qbToken = await getQBTokens();
  if (!qbToken) {
    redirect("/qb");
  }

  const refreshToken = await isTokenExpired("refresh", qbToken);
  if (refreshToken.isValidToken && refreshToken.isExpired) {
    redirect("/qb");
  }

  return null;
}
