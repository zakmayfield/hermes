"use server";

import { accessTokenRequest } from "./QuickBooks.utils";

export const fetchAccessToken = async (code: string) => {
  try {
    const res = await fetch(accessTokenRequest.baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        code,
        ...accessTokenRequest.payload
      })
    });

    const response = await res.json();

    return response;
  } catch (error) {
    console.log(error);
  }
};
