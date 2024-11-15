import { db } from "@/lib/prisma";
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

    console.log({ decryptedRefreshToken });

    const res = await fetch(`https://oauth.platform.intuit.com/oauth2/v1/tokens/bearer`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${btoa(
          `${process.env.QB_CLIENT_ID!}:${process.env.QB_CLIENT_SECRET!}`
        )}`
      },
      body: `grant_type=refresh_token&refresh_token=${decryptedRefreshToken}`
    });

    if (!res.ok) {
      const error = await res.json();
      console.log({ error });
      return new Response(null, {
        status: 500,
        statusText: "Foobar"
      });
    }

    const response = await res.json();
    console.log({ response });

    const { encrypted: EAT, iv: ATIV } = encryptToken(
      response.access_token,
      encryption_password
    );

    const { encrypted: ERT, iv: RTIV } = encryptToken(
      response.refresh_token,
      encryption_password
    );

    await db.quickbooksToken.update({
      where: { user_id },
      data: {
        encrypted_access_token: EAT,
        access_token_iv: ATIV,
        encrypted_refresh_token: ERT,
        refresh_token_iv: RTIV,
        access_token_expiration_time: new Date(Date.now() + response.expires_in * 1000),
        refresh_token_expiration_time: new Date(
          Date.now() + response.x_refresh_token_expires_in * 1000
        )
      }
    });

    return new Response(JSON.stringify({ success: true, user_id }));
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
