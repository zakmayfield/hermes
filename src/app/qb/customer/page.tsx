import { LinkAndApproveCustomers } from "@/features/LinkAndApproveCustomers";
import { handleTokenRefresh } from "@/data/qb/services/token";
import { redirect } from "next/navigation";
import { validateTokenExp } from "@/utils/qb";
import { getQuickbooksTokens } from "@/data/database/queries";

export default async function Page() {
  const qbTokens = await getQuickbooksTokens();
  if (!qbTokens) {
    redirect("/qb");
  }

  const { accessToken, refreshToken } = await validateTokenExp(qbTokens);
  if (accessToken.isExpired || refreshToken.isExpired) {
    const { error } = await handleTokenRefresh(qbTokens);

    if (error) {
      throw new Error("Unable to refresh your session");
    }
  }

  return (
    <div className="flex flex-col gap-lg">
      <h1>Manage Customers</h1>
      <LinkAndApproveCustomers />
    </div>
  );
}
