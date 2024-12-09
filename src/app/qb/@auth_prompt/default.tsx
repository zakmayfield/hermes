import { getQuickbooksTokens } from "@/data/database/quickbooks";
import { redirect } from "next/navigation";

export default async function Default() {
  const qbToken = await getQuickbooksTokens();
  if (!qbToken) {
    redirect("/qb");
  }

  return null;
}
