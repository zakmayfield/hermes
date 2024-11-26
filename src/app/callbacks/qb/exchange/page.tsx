import {
  createOrUpdateQBTokens,
  exchangeCodeForAccessToken
} from "@/quickbooks/services/token";
import { QBExchangeTokenRequest } from "@/quickbooks/types/token";
import { encrypt } from "@/quickbooks/utils/token";
import { getUserAuthOrThrow } from "@/utils/auth";
import { redirect } from "next/navigation";

const client_id = process.env.QB_CLIENT_ID!;
const client_secret = process.env.QB_CLIENT_SECRET!;
const redirect_uri = process.env.QB_REDIRECT_URI!;

export default async function Page({
  searchParams
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { id } = await getUserAuthOrThrow();

  const code = (await searchParams).code;
  const realmId = (await searchParams).realmId;

  const exchangeCodePayload: QBExchangeTokenRequest = {
    grant_type: "authorization_code",
    code: code as string,
    redirect_uri,
    client_id,
    client_secret
  };

  const exchangeCodeResponse = await exchangeCodeForAccessToken({
    ...exchangeCodePayload
  });

  if (exchangeCodeResponse) {
    const eat = await encrypt(exchangeCodeResponse.access_token);
    const ert = await encrypt(exchangeCodeResponse.refresh_token);

    await createOrUpdateQBTokens({
      user_id: id,
      realm_id: realmId as string,
      encrypted_access_token: eat.encrypted,
      access_token_iv: eat.iv,
      encrypted_refresh_token: ert.encrypted,
      refresh_token_iv: ert.iv,
      access_token_expiration_time: new Date(
        Date.now() + exchangeCodeResponse.expires_in * 1000
      ),
      refresh_token_expiration_time: new Date(
        Date.now() + exchangeCodeResponse.x_refresh_token_expires_in * 1000
      )
    });

    redirect("/qb");
  }

  return <div>Authenticating...</div>;
}
