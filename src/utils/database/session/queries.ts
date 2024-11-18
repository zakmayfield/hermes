"use server";

import { authOptions } from "@/lib/auth/auth.options";
import { getServerSession } from "next-auth";

export const getAuthSession = async () => {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return {
      error: "Unauthenticated",
      response: null
    };
  }

  return {
    error: null,
    response: session.user
  };
};
