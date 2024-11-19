import { getAuthSession } from "@/lib/auth/auth.options";

// TODO: *** Figure out why this page throws a 404 when redirected ***
export default async function Page({
  searchParams
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const session = await getAuthSession();
  const code = (await searchParams).code;
  const realmId = (await searchParams).realmId;

  const res = await fetch("http://localhost:3000/api/quickbooks/callback", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ code, realmId, userId: session?.user.id })
  });

  console.log(await res.json());

  return (
    <div>
      <h1>QuickBooks Callback Page</h1>

      <div>
        <h2>Authorization Code</h2> <p>{code}</p>
      </div>
    </div>
  );
}
