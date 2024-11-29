"use server";

import { fetcher } from "@/utils/fetcher";
import { qb_base_url } from "../utils/constants";
import { handleDecryptAccessToken } from "../utils/token";
import { CustomerQueryResponse } from "../types/customer";
import { db } from "@/lib/prisma";
import { getCoreSessionUserOrThrow } from "@/data/session";

export type FormattedCustomer = {
  Id: string;
  CompanyName: string;
  PrimaryEmailAddr: string;
};

export const getAllCustomers = async () => {
  try {
    if (!qb_base_url) {
      throw new Error("Invalid Request URL");
    }

    await getCoreSessionUserOrThrow();
    const { realmId, accessToken } = await handleDecryptAccessToken();

    const { response } = await fetcher<CustomerQueryResponse>({
      options: {
        fetchOptions: {
          baseUrl: `${qb_base_url}/company/${realmId}/query?query=SELECT * FROM Customer&minorversion=73`,
          init: {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`
            }
          }
        }
      }
    });

    const formattedData = response?.QueryResponse.Customer.map((customer) => ({
      Id: customer.Id,
      CompanyName: customer.CompanyName,
      PrimaryEmailAddr: customer.PrimaryEmailAddr.Address
    }));

    return formattedData;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error(error.message);
    }

    throw new Error("Unexpected Server Error");
  }
};

export const getQBSyncAccount = async (dbCustomerId: string) => {
  return await db.quickbooksCustomerSync.findUnique({ where: { user_id: dbCustomerId } });
};

export const syncQuickbooksAccount = async ({
  user_id,
  customer_id,
  company_name
}: {
  user_id: string;
  customer_id: string | null;
  company_name: string | null;
}) => {
  if (!customer_id || !company_name) {
    throw new Error("Invalid Request Data");
  }
  try {
    return await db.quickbooksCustomerSync.upsert({
      where: { user_id },
      update: { customer_id, company_name },
      create: { user_id, customer_id, company_name }
    });
  } catch (error) {
    if (error instanceof Error) {
      if (error.message.includes("Unique constraint")) {
        throw new Error("This account is already linked");
      }
    }

    throw new Error("Unexpected Server Error");
  }
};
