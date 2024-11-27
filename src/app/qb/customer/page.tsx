import { CustomerSync } from "@/quickbooks/components/CustomerSync";
import { getQBTokens, handleTokenRefresh } from "@/quickbooks/services/token";
import { validateTokenExpiration } from "@/quickbooks/utils/token";
import { redirect } from "next/navigation";

export default async function Page() {
  const qbTokens = await getQBTokens();
  if (!qbTokens) {
    redirect("/qb");
  }

  const { accessToken } = await validateTokenExpiration(qbTokens);
  if (accessToken.isExpired) {
    await handleTokenRefresh(qbTokens);
  }

  return (
    <div>
      <h1>customer</h1>

      <CustomerSync />
    </div>
  );
}
