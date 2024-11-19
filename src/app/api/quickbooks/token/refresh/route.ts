import { db } from "@/lib/prisma";
import { AccessTokenResponse } from "@/types/quickbooks";
import { fetcher } from "@/utils/database/fetcher";
import {
  decryptToken,
  encryption_password,
  encryptToken
} from "@/utils/security/encryption";
import { NextRequest } from "next/server";

async function handler(req: NextRequest) {
  try {
    const headersList = new Headers(req.headers);
    const user_id = headersList.get("x-user-id");

    if (!user_id) {
      return new Response(null, {
        status: 401,
        statusText: "Unauthenticated"
      });
    }

    const quickbooksTokenRecord = await db.quickbooksToken.findUnique({
      where: { user_id }
    });

    if (!quickbooksTokenRecord) {
      return new Response(null, {
        status: 400,
        statusText: "Could not locate token"
      });
    }

    const decryptedRefreshToken = decryptToken(
      quickbooksTokenRecord?.encrypted_refresh_token,
      encryption_password,
      quickbooksTokenRecord?.refresh_token_iv
    );

    const { error, response } = await fetcher<AccessTokenResponse>({
      options: {
        fetchOptions: {
          baseUrl: "https://oauth.platform.intuit.com/oauth2/v1/tokens/bearer",
          init: {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: `Basic ${btoa(
                `${process.env.QB_CLIENT_ID!}:${process.env.QB_CLIENT_SECRET!}`
              )}`
            },
            body: `grant_type=refresh_token&refresh_token=${decryptedRefreshToken}`
          }
        }
      }
    });

    if (error) {
      return new Response(null, { status: 500, statusText: error });
    }

    if (!response) {
      return new Response(null, { status: 500, statusText: "Unexpected server error" });
    }

    const { encrypted: EAT, iv: ATIV } = encryptToken(
      response.access_token,
      encryption_password
    );

    await db.quickbooksToken.update({
      where: { user_id },
      data: {
        encrypted_access_token: EAT,
        access_token_iv: ATIV,

        access_token_expiration_time: new Date(Date.now() + response.expires_in * 1000)
      }
    });

    return new Response(JSON.stringify({ success: true }));
  } catch (error) {
    if (error instanceof Error) {
      console.log({ error });
      return new Response(null, {
        status: 500,
        statusText: "Unable to refresh token"
      });
    }

    return new Response(null, {
      status: 500,
      statusText: "Unexpected server error"
    });
  }
}

export { handler as GET };
