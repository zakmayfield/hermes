import { getQuickbooksTokens } from "@/data/database/queries";
import { handleTokenRefresh } from "@/data/qb/services/token";
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
    <div>
      <h1>invoice</h1>
      page
    </div>
  );
}
