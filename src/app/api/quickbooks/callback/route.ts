import { fetchAccessToken } from "@/features/quickbooks/QuickBooks.server";
import { NextRequest } from "next/server";
import * as crypto from "crypto";
import { db } from "@/lib/prisma";

const encryption_password = process.env.ENCRYPTION_SECRET!;
const encryption_algorithm = process.env.ENCRYPTION_ALGO!;

function encryptToken(token: string, password: string) {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(encryption_algorithm, Buffer.from(password), iv);
  let encrypted = cipher.update(token, "utf8", "hex");
  encrypted += cipher.final("hex");
  return { iv: iv.toString("hex"), encrypted };
}

function decryptToken(encryptedToken: string, password: string, iv: string) {
  const decipher = crypto.createDecipheriv(
    encryption_algorithm,
    Buffer.from(password),
    Buffer.from(iv, "hex")
  );
  let decrypted = decipher.update(encryptedToken, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}

export async function handler(req: NextRequest) {
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
