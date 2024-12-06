import { getQuickbooksTokens } from "@/data/database/quickbooks";
import { handleTokenRefresh } from "@/data/qb/token";
import { GenerateInvoices } from "@/features/GenerateInvoices";
import { validateTokenExp } from "@/utils/qb";
import { redirect } from "next/navigation";

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
      <h1>Manage Invoices</h1>
      <GenerateInvoices />
    </div>
  );
}
