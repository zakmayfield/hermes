"use server";

import { getQuickbooksTokens } from "@/data/database/quickbooks";

export const hasQbTokens = async (): Promise<boolean> => {
  return !!(await getQuickbooksTokens());
};
