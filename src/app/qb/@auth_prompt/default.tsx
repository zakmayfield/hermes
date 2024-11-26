import { getQBTokens } from "@/quickbooks/services/token";
import { redirect } from "next/navigation";

export default async function Default() {
  const qbToken = await getQBTokens();
  if (!qbToken) {
    redirect("/qb");
  }

  return null;
}
