"use server";

import { getAuthSession } from "../database/session/queries";

export const isUserAuthenticated = async () => {
  const sessionData = await getAuthSession();
  return !!(!sessionData || !sessionData.response);
};

export const getUserAuth = async () => {
  const sessionData = await getAuthSession();
  if (!sessionData || !sessionData.response) {
    return null;
  }

  const { id, email, role } = sessionData.response;

  return { id, email, role };
};

export const getUserAuthOrThrow = async () => {
  const userAuth = await getUserAuth();

  if (!userAuth) {
    throw new Error("Unauthenticated");
  }

  return userAuth;
};
