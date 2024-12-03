"use server";

import { getSession } from "./getSession";

export const isUserAuthenticated = async (): Promise<boolean> => {
  const sessionData = await getSession();

  if (!sessionData || !sessionData.response) {
    return false;
  }

  return true;
};
