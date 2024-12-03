"use server";

import { getQuickbooksTokens } from "@/data/database/queries";

export const hasQbTokens = async (): Promise<boolean> => {
  return !!(await getQuickbooksTokens());
};
