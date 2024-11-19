import { fetcher } from "@/utils/database/fetcher";
import { getQuickbooksToken } from "@/utils/database/quickbooks/queries";
import { getAuthSession } from "@/utils/database/session/queries";
import { isTokenExpired } from "@/utils/security/quickbooksToken";
import { QuickbooksToken } from "@prisma/client";
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

  // If no token is retrieved: authenticate with OAuth2
  if (!quickbooksTokenResponse) {
    redirect(OAuthURL);
  }

  if (quickbooksTokenResponse) {
    // If refresh_token is expired: re-authenticate with OAuth2
    const isRefreshTokenExpired = await isTokenExpired(
      quickbooksTokenResponse,
      "refresh"
    );

    // If access_token is expired: refresh token
    const isAccessTokenExpired = await isTokenExpired(quickbooksTokenResponse, "access");
    if (isAccessTokenExpired) {
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
  }
  return <div>page</div>;
}
