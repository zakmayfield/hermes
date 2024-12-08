"use server";

import { handleDecryptAccessToken } from "@/utils/qb";
import { ReadCustomerResponse } from "../validators/customer";
import { qb_base_url } from "@/utils/qb/constants";

export const getCustomerById = async (id: string): Promise<ReadCustomerResponse> => {
  try {
    const { accessToken, realmId } = await handleDecryptAccessToken();

    const res = await fetch(
      `${qb_base_url}/company/${realmId}/customer/${id}?minorversion=73`,
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

    const data = await res.json();
    return data as ReadCustomerResponse;
  } catch (error) {
    throw new Error("Unable to get customer data");
  }
};
