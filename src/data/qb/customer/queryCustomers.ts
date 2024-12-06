"use server";

import { getCoreSessionUserOrThrow } from "@/data/session";
import { qb_base_url } from "@/utils/qb/constants";
import { handleDecryptAccessToken } from "@/utils/qb";
import { CustomerQueryResults, customerValidators } from "@/data/qb/validators";

export const queryCustomers = async () => {
  try {
    if (!qb_base_url) {
      throw new Error("Invalid Request URL");
    }

    await getCoreSessionUserOrThrow();
    const { realmId, accessToken } = await handleDecryptAccessToken();

    const res = await fetch(
      `${qb_base_url}/company/${realmId}/query?query=SELECT * FROM Customer&minorversion=73`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`
        }
      }
    );

    if (!res.ok) {
      console.error(await res.text());
      throw new Error(res.statusText);
    }

    const response = await res.json();
    const safeParse = customerValidators.query.safeParse(response);

    if (safeParse.error) {
      throw new Error("Unexpected data received");
    }

    return response as CustomerQueryResults;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error(error.message);
    }

    throw new Error("Unexpected Server Error");
  }
};
