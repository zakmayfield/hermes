import { getCoreSessionUserOrThrow } from "@/data/session";
import { handleTokenExchange, handleUpsertTokenData } from "@/quickbooks/services/token";
import { redirect } from "next/navigation";

export default async function Page({
  searchParams
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { id } = await getCoreSessionUserOrThrow();
  const code = (await searchParams).code;
  const realmId = (await searchParams).realmId;

  const tokenData = await handleTokenExchange({
    code: code as string
  });

  if (tokenData) {
    await handleUpsertTokenData({
      user_id: id,
      realm_id: realmId as string,
      token: tokenData
    });

    redirect("/qb/customer");
  }

  return <div>Authenticating...</div>;
}
