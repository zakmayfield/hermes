import { fetcher } from "@/utils/database/fetcher";
import { getAuthSession } from "@/utils/database/session/queries";
import { redirect } from "next/navigation";

export default async function Page({
  searchParams
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const sessionData = await getAuthSession();
  if (!sessionData || !sessionData.response) {
    redirect("/sign-in");
  }

  const { id } = sessionData.response;

  const code = (await searchParams).code;
  const realmId = (await searchParams).realmId;

  if (code && realmId) {
    await fetcher({
      options: {
        fetchOptions: {
          baseUrl: "http://localhost:3000/api/quickbooks/token/exchange",
          init: {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ code, realmId, userId: id })
          }
        }
      }
    });
  }

  return (
    <div>
      <h2>QuickBooks Callback Page</h2>
    </div>
  );
}
