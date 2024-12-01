import { LinkAndApproveCustomers } from "@/quickbooks/components/LinkAndApproveCustomers";
import { getQBTokens, handleTokenRefresh } from "@/quickbooks/services/token";
import { validateTokenExpiration } from "@/quickbooks/utils/token";
import { redirect } from "next/navigation";

export default async function Page() {
  const qbTokens = await getQBTokens();
  if (!qbTokens) {
    redirect("/qb");
  }

  const { accessToken, refreshToken } = await validateTokenExpiration(qbTokens);
  if (accessToken.isExpired || refreshToken.isExpired) {
    const { error } = await handleTokenRefresh(qbTokens);

    if (error) {
      throw new Error("Unable to refresh your session");
    }
  }

  return (
    <div>
      <h1>Manage Customers</h1>
      {/* <CustomerSync /> */}
      <LinkAndApproveCustomers />
    </div>
  );
}
