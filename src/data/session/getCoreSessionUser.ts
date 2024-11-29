"use server";

import { getSession } from "@/data/session";
import { CoreSessionUser } from "../database/models/User";

export const getCoreSessionUser = async (): Promise<CoreSessionUser | null> => {
  const sessionData = await getSession();
  if (!sessionData || !sessionData.response) {
    return null;
  }

  const { id, email, role } = sessionData.response;

  return { id, email, role };
};
