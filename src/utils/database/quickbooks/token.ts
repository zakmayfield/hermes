"use server";

import { db } from "@/lib/prisma";

export const getQBTokenData = async (user_id: string) => {
  return await db.quickbooksToken.findUnique({
    where: { user_id }
  });
};

export const shouldRefreshToken = async (
  last_login: Date | null,
  expiration: Date | undefined
) => {
  console.log({
    last_login,
    expiration
  });

  if (!last_login || !expiration) {
    return false;
  }

  if (last_login > expiration) {
    return true;
  }

  return false;
};

export const refreshAccessToken = async (user_id: string) => {
  try {
    await fetch("http://localhost:3000/api/quickbooks/refresh", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-user-id": user_id
      }
    });

    // if (!res.ok) {
    //   throw new Error(res.statusText);
    // }

    // console.log(await res.json());
  } catch (error) {
    // console.log(error);
  }
};
