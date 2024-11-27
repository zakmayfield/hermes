import { Token } from "@/quickbooks/types/token";
import { qb_token_url } from "@/quickbooks/utils/constants";
import { decrypt } from "@/quickbooks/utils/token";
import { fetcher } from "@/utils/fetcher";
import { QuickbooksToken } from "@prisma/client";
import { handleUpsertTokenData } from "./database";

export const handleTokenRefresh = async (payload: QuickbooksToken) => {
  const refreshToken = await decrypt(
    payload.encrypted_refresh_token,
    payload.refresh_token_iv
  );

  try {
    if (!qb_token_url) {
      console.error("Invalid URL");
      throw new Error("Invalid URL");
    }

    const { response } = await fetcher<Token>({
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
      await handleUpsertTokenData({
        user_id: payload.user_id,
        realm_id: payload.realm_id,
        token: response
      });
    }

    return response;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw new Error(error.message);
    }

    console.error(error);
    throw new Error("Unexpected Server Error");
  }
};
