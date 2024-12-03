import { getQuickbooksTokens } from "@/data/database/queries";
import { redirect } from "next/navigation";

export default async function Default() {
  const qbToken = await getQuickbooksTokens();
  if (!qbToken) {
    redirect("/qb");
  }

  return null;
}
