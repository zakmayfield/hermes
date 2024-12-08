"use server";

import { QuickbooksToken } from "@prisma/client";
import { getQuickbooksTokens } from "@/data/database/quickbooks";

export const getQuickbooksTokensOrThrow = async (): Promise<QuickbooksToken> => {
  try {
    const qbTokens = await getQuickbooksTokens();
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
