"use server";

import { CoreSessionUser } from "../database/models/User";
import { getCoreSessionUser } from "./getCoreSessionUser";

export const getCoreSessionUserOrThrow = async (): Promise<CoreSessionUser> => {
  const userAuth = await getCoreSessionUser();

  if (!userAuth) {
    throw new Error("Unauthenticated");
  }

  return userAuth;
};
