"use server";

import { handleDecryptAccessToken } from "@/utils/qb";
import { qb_base_url } from "@/utils/qb/constants";

export const getItemRef = async (name: string) => {
  try {
    const { accessToken, realmId } = await handleDecryptAccessToken();
    const res = await fetch(
      `${qb_base_url}/company/${realmId}/query?query=SELECT * FROM Item WHERE Type ='NonInventory' AND Name = '${name}'&minorversion=73`,
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

    return {
      value: data.QueryResponse.Item[0].Id,
      name: data.QueryResponse.Item[0].Name
    } as {
      value: string;
      name: string;
    };
  } catch (error) {
    throw new Error("Could not get item data");
  }
};
