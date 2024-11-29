"use server";

import { getSession } from "./getSession";

export const isUserAuthenticated = async (): Promise<boolean> => {
  const sessionData = await getSession();
  return !!(!sessionData || !sessionData.response);
};
