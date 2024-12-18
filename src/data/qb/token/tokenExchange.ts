import {
  qb_client_id,
  qb_client_secret,
  qb_redirect_uri,
  qb_token_url
} from "@/utils/qb/constants";
import { fetcher } from "@/utils/fetcher";
import { z } from "zod";
import { tokenValidators } from "@/data/qb/validators";

type ExchangeToken = {
  code: string;
};

export const handleTokenExchange = async ({ code }: ExchangeToken) => {
  try {
    if (!qb_token_url) {
      console.error("Invalid URL");
      throw new Error("Invalid URL");
    }

    if (!qb_client_id || !qb_client_secret || !qb_redirect_uri) {
      console.error("Invalid Request Parameters");
      throw new Error("Invalid Request Parameters");
    }

    const requestPayload = {
      code,
      grant_type: "authorization_code",
      redirect_uri: qb_redirect_uri,
      client_id: qb_client_id,
      client_secret: qb_client_secret
    };

    const { response } = await fetcher<z.infer<typeof tokenValidators.accessToken>>({
      options: {
        fetchOptions: {
          baseUrl: qb_token_url,
          init: {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams({
              ...requestPayload
            })
          }
        }
      }
    });

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
