"use server";

import { getSession } from "@/data/session";

export const isUserAuthenticated = async (): Promise<boolean> => {
  const sessionData = await getSession();
  return !!(!sessionData || !sessionData.response);
};
