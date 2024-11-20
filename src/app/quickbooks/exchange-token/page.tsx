import { Icon, Spin } from "@/ui";
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
    // redirect if successful
    const { response } = await fetcher({
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

    if (response) {
      redirect("/quickbooks");
    }
  }

  return (
    <div>
      <div className="absolute inline-flex items-center gap-sm right-0 top-0">
        <Spin style={{ parentWrapper: { padding: "xs" } }} />

        <Icon
          name="quickbooks"
          style={{ fontSize: "2xl" }}
        />
      </div>

      <div className="mt-lg bg-primary rounded-md w-md space-y-sm mx-auto p-lg">
        <div className="flex items-center gap-lg">
          <h2>Verifying Request</h2>
          <Spin style={{ icon: { fontSize: "2xl" } }} />
        </div>
        <p className="text-foreground/70">Sit tight while we verify your information</p>
      </div>
    </div>
  );
}
