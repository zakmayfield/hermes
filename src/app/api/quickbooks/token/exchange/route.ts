import { NextRequest } from "next/server";
import { db } from "@/lib/prisma";
import { encryption_password, encryptToken } from "@/utils/security/encryption";
import { fetcher } from "@/utils/database/fetcher";

const access_token_base_url = process.env.QB_ACCESS_TOKEN_URL!;
const client_id = process.env.QB_CLIENT_ID!;
const client_secret = process.env.QB_CLIENT_SECRET!;
const redirect_uri = process.env.QB_REDIRECT_URI!;

async function handler(req: NextRequest) {
  try {
    const reqBody = await req.json();

    const authCode = reqBody.code;
    const realmId = reqBody.realmId;
    const userId = reqBody.userId;

    const accessTokenRequest = {
      baseUrl: access_token_base_url,
      payload: {
        grant_type: "authorization_code",
        code: authCode,
        redirect_uri,
        client_id,
        client_secret
      }
    };

    const { error, response } = await fetcher<{
      expires_in: number;
      token_type: string;
      access_token: string;
      refresh_token: string;
      x_refresh_token_expires_in: number;
    }>({
      options: {
        fetchOptions: {
          baseUrl: accessTokenRequest.baseUrl,
          init: {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams({
              ...accessTokenRequest.payload
            })
          }
        }
      }
    });

    if (error) {
      return new Response(null, { statusText: error });
    }

    if (response) {
      const encryptedAccessTokenData = encryptToken(
        response.access_token,
        encryption_password
      );
      const encryptedRefreshTokenData = encryptToken(
        response.refresh_token,
        encryption_password
      );

      const quickbooksTokenPayload = {
        user_id: userId,
        realm_id: realmId,
        encrypted_access_token: encryptedAccessTokenData.encrypted,
        encrypted_refresh_token: encryptedRefreshTokenData.encrypted,
        access_token_expiration_time: new Date(Date.now() + response.expires_in * 1000),
        refresh_token_expiration_time: new Date(
          Date.now() + response.x_refresh_token_expires_in * 1000
        ),
        access_token_iv: encryptedAccessTokenData.iv,
        refresh_token_iv: encryptedRefreshTokenData.iv
      };

      await db.quickbooksToken.upsert({
        where: { user_id: userId },
        update: { ...quickbooksTokenPayload },
        create: { ...quickbooksTokenPayload }
      });
    }

    return new Response(JSON.stringify({ success: true }));
  } catch (error) {
    if (error instanceof Error) {
      return new Response(JSON.stringify({ error, message: error.message }), {
        status: 500
      });
    }
    return new Response(JSON.stringify({ error: "Server error" }), { status: 500 });
  }
}

export { handler as POST };
