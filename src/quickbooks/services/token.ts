"use server";

import { db } from "@/lib/prisma";
import { getUserAuthOrThrow } from "@/utils/auth";
import { QuickbooksToken } from "@prisma/client";
import {
  CreateOrUpdateQBToken,
  QBExchangeTokenRequest,
  QBTokenResponse
} from "../types/token";
import { fetcher } from "@/utils/database/fetcher";

// TOKENS
export const getQBTokens = async (): Promise<QuickbooksToken | null> => {
  const { id } = await getUserAuthOrThrow();

  const qbToken = await db.quickbooksToken.findUnique({ where: { user_id: id } });
  if (!qbToken) {
    return null;
  }

  return qbToken;
};

export const getQBTokensOrThrow = async (): Promise<QuickbooksToken> => {
  try {
    const qbTokens = await getQBTokens();
    if (!qbTokens) {
      throw new Error("Could not locate QB tokens");
    }

    return qbTokens;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw new Error(error.message);
    }

    console.error(error);
    throw new Error("Unexpected Server Error");
  }
};

export const createOrUpdateQBTokens = async (
  tokenPayload: CreateOrUpdateQBToken
): Promise<QuickbooksToken> => {
  try {
    return await db.quickbooksToken.upsert({
      where: { user_id: tokenPayload.user_id },
      update: { ...tokenPayload },
      create: { ...tokenPayload }
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw new Error(error.message);
    }

    console.error(error);
    throw new Error("Unexpected Server Error");
  }
};

const access_token_base_url = process.env.QB_ACCESS_TOKEN_URL!;

export const exchangeCodeForAccessToken = async (payload: QBExchangeTokenRequest) => {
  try {
    const { response } = await fetcher<QBTokenResponse>({
      options: {
        fetchOptions: {
          baseUrl: access_token_base_url,
          init: {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams({
              ...payload
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

export const refreshAccessToken = async (refresh_token: string) => {
  try {
    const { response } = await fetcher<QBTokenResponse>({
      options: {
        fetchOptions: {
          baseUrl: access_token_base_url,
          init: {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: `Basic ${btoa(
                `${process.env.QB_CLIENT_ID!}:${process.env.QB_CLIENT_SECRET!}`
              )}`
            },
            body: `grant_type=refresh_token&refresh_token=${refresh_token}`
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
