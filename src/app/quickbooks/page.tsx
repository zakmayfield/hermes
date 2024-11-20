import { Icon } from "@/ui";
import { fetcher } from "@/utils/database/fetcher";
import { getQuickbooksToken } from "@/utils/database/quickbooks/queries";
import { getAuthSession } from "@/utils/database/session/queries";
import { isTokenExpired } from "@/utils/security/quickbooksToken";
import { QuickbooksToken } from "@prisma/client";
import Link from "next/link";
import { redirect } from "next/navigation";

const client_id = process.env.QB_CLIENT_ID;
const redirect_uri = process.env.QB_REDIRECT_URI;
const state = process.env.QB_STATE;
const scope = process.env.QB_SCOPE;
const baseOAuthURL = process.env.QB_OAUTH_URL;

const OAuthURL = `${baseOAuthURL}?response_type=code&client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}&state=${state}`;

export default async function Page() {
  const sessionData = await getAuthSession();
  if (!sessionData || !sessionData.response) {
    redirect("/sign-in");
  }

  const { id } = sessionData.response;

  const { response: quickbooksTokenResponse } = await fetcher<QuickbooksToken | null>({
    options: { dbFn: async () => getQuickbooksToken(id) }
  });

  // If refresh_token is expired: re-authenticate with OAuth2
  const refreshToken = await isTokenExpired("refresh", quickbooksTokenResponse);

  // If access_token is expired: refresh token
  const accessToken = await isTokenExpired("access", quickbooksTokenResponse);
  if (accessToken.isValidToken && accessToken.isExpired) {
    await fetcher({
      options: {
        fetchOptions: {
          baseUrl: "http://localhost:3000/api/quickbooks/token/refresh",
          init: {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "x-user-id": id
            }
          }
        }
      }
    });
  }

  return (
    <div className="absolute inline-flex items-center gap-sm right-0 top-0">
      {!quickbooksTokenResponse ||
      (refreshToken.isExpired && refreshToken.isValidToken) ? (
        <Link
          href={OAuthURL}
          className="rounded-md p-xs"
        >
          Connect To QuickBooks
        </Link>
      ) : (
        <Icon
          name="check"
          style={{ fontSize: "2xl", textColor: "success", margin: "xs" }}
        />
      )}

      <Icon
        name="quickbooks"
        style={{ fontSize: "2xl" }}
      />
    </div>
  );
}
