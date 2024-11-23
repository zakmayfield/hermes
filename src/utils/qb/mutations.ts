"use server";

import { fetcher } from "../database/fetcher";
import { getQuickbooksToken } from "../database/quickbooks/queries";
import { getAuthSession } from "../database/session/queries";
import { decryptToken, encryption_password } from "../security/encryption";

const baseUrl = process.env.QB_SANDBOX_BASE_URL!;

const testQty = 7;
const testProduct = {
  Name: "RASP LMD-1",
  Description: "1 Litre Raspberry Lemonade",
  Active: true,
  FullyQualifiedName: "RASP LMD-1",
  Taxable: false,
  SalesTaxIncluded: false,
  UnitPrice: 8.95,
  Type: "Service",
  IncomeAccountRef: [Object],
  PurchaseTaxIncluded: false,
  PurchaseCost: 0,
  TrackQtyOnHand: false,
  domain: "QBO",
  sparse: false,
  Id: "33",
  SyncToken: "1",
  MetaData: [Object]
};
const testCustomer = {
  Taxable: false,
  BillAddr: [Object],
  ShipAddr: [Object],
  Notes: "cc info here",
  Job: false,
  BillWithParent: false,
  PaymentMethodRef: [Object],
  Balance: 92.6,
  BalanceWithJobs: 92.6,
  CurrencyRef: [Object],
  PreferredDeliveryMethod: "None",
  domain: "QBO",
  sparse: false,
  Id: "67",
  SyncToken: "0",
  MetaData: [Object],
  GivenName: "Melissa",
  FamilyName: "Picazo",
  FullyQualifiedName: "Melissa's Bakery",
  CompanyName: "Melissa's Bakery",
  DisplayName: "Melissa's Bakery",
  PrintOnCheckName: "Daniella Mayfield",
  Active: true,
  PrimaryPhone: [Object],
  PrimaryEmailAddr: [Object]
};

export const createInvoice = async () => {
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

  const { error, response } = await fetcher({
    options: {
      fetchOptions: {
        baseUrl: `${baseUrl}/company/${qbToken?.realm_id}/invoice?minorversion=73`,
        init: {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${decryptedAccessToken}`
          },
          body: JSON.stringify({
            CustomerRef: {
              name: testCustomer.DisplayName,
              value: testCustomer.Id
            },
            Line: [
              {
                DetailType: "SalesItemLineDetail",
                Amount: Number((testQty * testProduct.UnitPrice).toFixed(2)),
                SalesItemLineDetail: {
                  ItemRef: {
                    name: testProduct.Name,
                    value: testProduct.Id
                  },
                  Qty: Number(testQty.toFixed(1))
                }
              }
            ]
          })
        }
      }
    }
  });

  console.log({ error, response });
};

export type CreateProductInput = {
  Name: string;
  Type: string;
};

export type CreateProductOutput = {
  Item: {
    FullyQualifiedName: string;
    domain: string;
    Id: string;
    Name: string;
    TrackQtyOnHand: boolean;
    UnitPrice: number;
    PurchaseCost: number;
    QtyOnHand: number;
    IncomeAccountRef: {
      name: string;
      value: string;
    };
    AssetAccountRef: {
      name: string;
      value: string;
    };
    Taxable: boolean;
    sparse: boolean;
    Active: boolean;
    SyncToken: string;
    InvStartDate: string;
    Type: string;
    ExpenseAccountRef: {
      name: string;
      value: string;
    };
    MetaData: {
      CreateTime: string;
      LastUpdatedTime: string;
    };
  };
  time: string;
};

export const createProduct = async ({
  Name,
  Type
}: CreateProductInput): Promise<CreateProductOutput | null> => {
  console.log({ Name, Type });
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

  const { error, response } = await fetcher<CreateProductOutput>({
    options: {
      fetchOptions: {
        baseUrl: `${baseUrl}/company/${qbToken?.realm_id}/item`,
        init: {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${decryptedAccessToken}`
          },
          body: JSON.stringify({
            Name,
            Type
          })
        }
      }
    }
  });

  return response;
};
