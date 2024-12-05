import { z } from "zod";
import { QuickbooksToken } from "@prisma/client";
import { qb_token_url } from "@/utils/qb/constants";
import { fetcher } from "@/utils/fetcher";
import { decrypt } from "@/utils/qb";
import { upsertQuickbooksToken } from "@/data/database/mutations";
import { tokenValidators } from "@/data/qb/validators";

export const handleTokenRefresh = async (payload: QuickbooksToken) => {
  const refreshToken = await decrypt(
    payload.encryptedRefreshToken,
    payload.refreshTokenIv
  );

  try {
    if (!qb_token_url) {
      console.error("Invalid URL");
      throw new Error("Invalid URL");
    }

    const { error, response } = await fetcher<
      z.infer<typeof tokenValidators.accessToken>
    >({
      options: {
        fetchOptions: {
          baseUrl: qb_token_url,
          init: {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: `Basic ${btoa(
                `${process.env.QB_CLIENT_ID!}:${process.env.QB_CLIENT_SECRET!}`
              )}`
            },
            body: `grant_type=refresh_token&refresh_token=${refreshToken}`
          }
        }
      }
    });

    if (response) {
      await upsertQuickbooksToken({
        userId: payload.userId,
        realmId: payload.realmId,
        token: response
      });
    }

    return { error, response };
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw new Error(error.message);
    }

    console.error(error);
    throw new Error("Unexpected Server Error");
  }
};
