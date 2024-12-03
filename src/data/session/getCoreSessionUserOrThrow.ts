"use server";

import { CoreSessionUser } from "../database/models/User";
import { getCoreSessionUser } from "./getCoreSessionUser";

export const getCoreSessionUserOrThrow = async (): Promise<CoreSessionUser> => {
  const session = await getCoreSessionUser();

  if (!session) {
    throw new Error("Unauthenticated");
  }

  return {
    id: session.id,
    email: session.email,
    role: session.role
  };
};
