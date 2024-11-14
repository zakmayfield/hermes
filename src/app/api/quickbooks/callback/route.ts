import { fetchAccessToken } from "@/features/quickbooks/QuickBooks.server";
import { NextRequest } from "next/server";
import { db } from "@/lib/prisma";
import { encryption_password, encryptToken } from "@/utils/security/encryption";

// TODO: *** Figure out why `session` is null when evoking `await getAuthSession()` here ***
// Note: i was exporting `handler` twice, maybe that was causing issues, test this
async function handler(req: NextRequest) {
  try {
    const reqBody = await req.json();

    const authCode = reqBody.code;
    const realmId = reqBody.realmId;
    const userId = reqBody.userId;

    const accessTokenResponse: {
      token_type: string;
      x_refresh_token_expires_in: number;
      refresh_token: string;
      access_token: string;
      expires_in: number;
    } = await fetchAccessToken(authCode);

    // ENCRYPTION
    const encryptedAccessTokenData = encryptToken(
      accessTokenResponse.access_token,
      encryption_password
    );
    const encryptedRefreshTokenData = encryptToken(
      accessTokenResponse.refresh_token,
      encryption_password
    );

    const { user_quickbooks_token_id } = await db.quickbooksToken.create({
      data: {
        user_id: userId,
        realm_id: realmId,
        encrypted_access_token: encryptedAccessTokenData.encrypted,
        encrypted_refresh_token: encryptedRefreshTokenData.encrypted,
        access_token_expiration_time: new Date(
          Date.now() + accessTokenResponse.expires_in * 1000
        ),
        refresh_token_expiration_time: new Date(
          Date.now() + accessTokenResponse.x_refresh_token_expires_in * 1000
        )
      }
    });

    return new Response(
      JSON.stringify({ success: true, authCode, realmId, user_quickbooks_token_id })
    );
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
