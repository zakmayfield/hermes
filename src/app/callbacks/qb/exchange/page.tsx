import { getCoreSessionUserOrThrow } from "@/data/session";
import { handleTokenExchange } from "@/data/qb/services/token";
import { redirect } from "next/navigation";
import { upsertQuickbooksToken } from "@/data/database/quickbooks";

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
    await upsertQuickbooksToken({
      userId: id,
      realmId: realmId as string,
      token: tokenData
    });

    redirect("/qb/customer");
  }

  return <div>Authenticating...</div>;
}
