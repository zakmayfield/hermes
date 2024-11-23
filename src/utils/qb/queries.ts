"use server";

import { fetcher } from "../database/fetcher";
import { getQuickbooksToken } from "../database/quickbooks/queries";
import { getAuthSession } from "../database/session/queries";
import { decryptToken, encryption_password } from "../security/encryption";
const baseUrl = process.env.QB_SANDBOX_BASE_URL!;

export const getProductFromCode = async (code: string) => {
  const sessionData = await getAuthSession();

  const { id } = sessionData.response || {};

  const { response: qbToken } = await fetcher({
    options: { dbFn: async () => await getQuickbooksToken(id!) }
  });

  const decryptedAccessToken = decryptToken(
    qbToken?.encrypted_access_token || "",
    encryption_password,
    qbToken?.access_token_iv || ""
  );

  const { error, response } = await fetcher<{
    QueryResponse: { Item: []; startPosition: number; maxResults: number };
    time: string;
  }>({
    options: {
      fetchOptions: {
        baseUrl: `${baseUrl}/company/${qbToken?.realm_id}/query?query=SELECT * FROM Item WHERE Name = '${code}'`,
        init: {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${decryptedAccessToken}`
          }
        }
      }
    }
  });

  console.log(error, response?.QueryResponse.Item);
};

export const getCustomers = async () => {
  const sessionData = await getAuthSession();

  const { id } = sessionData.response || {};

  const { response: qbToken } = await fetcher({
    options: { dbFn: async () => await getQuickbooksToken(id!) }
  });

  const decryptedAccessToken = decryptToken(
    qbToken?.encrypted_access_token || "",
    encryption_password,
    qbToken?.access_token_iv || ""
  );

  const { error, response } = await fetcher<{
    QueryResponse: { Customer: []; startPosition: number; maxResults: number };
    time: string;
  }>({
    options: {
      fetchOptions: {
        baseUrl: `${baseUrl}/company/${qbToken?.realm_id}/query?query=select * from Customer`,
        init: {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${decryptedAccessToken}`
          }
        }
      }
    }
  });

  console.log({
    error,
    response: response?.QueryResponse.Customer
  });
};

export const getProducts = async () => {
  const sessionData = await getAuthSession();

  const { id } = sessionData.response || {};

  const { response: qbToken } = await fetcher({
    options: { dbFn: async () => await getQuickbooksToken(id!) }
  });

  const decryptedAccessToken = decryptToken(
    qbToken?.encrypted_access_token || "",
    encryption_password,
    qbToken?.access_token_iv || ""
  );

  const { error, response } = await fetcher<{
    QueryResponse: {
      Item: [{ Name: string }];
      startPosition: number;
      maxResults: number;
    };
    time: string;
  }>({
    options: {
      fetchOptions: {
        baseUrl: `${baseUrl}/company/${qbToken?.realm_id}/query?query=SELECT * FROM Item`,
        init: {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${decryptedAccessToken}`
          }
        }
      }
    }
  });

  console.log({
    error,
    response: response?.QueryResponse.Item
  });

  return response?.QueryResponse.Item;
};
