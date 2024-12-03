"use server";

import { config } from "@/lib/nextAuth/config";
import { getServerSession } from "next-auth";

export const getSession = async () => {
  const session = await getServerSession(config);

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
