"use server";

import { CoreSessionUser } from "../database/models/User";
import { getSession } from "./getSession";

export const getCoreSessionUser = async (): Promise<CoreSessionUser | null> => {
  const sessionData = await getSession();
  if (!sessionData || !sessionData.response) {
    return null;
  }

  const { id, email, role } = sessionData.response;

  return { id, email, role };
};
