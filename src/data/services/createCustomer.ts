"use server";

import { getQBTokensOrThrow } from "@/quickbooks/services/token";
import { CustomerResponse } from "@/quickbooks/types/customer";
import { qb_base_url } from "@/quickbooks/utils/constants";
import { decrypt } from "@/quickbooks/utils/encryption";
import { fetcher } from "@/utils/fetcher";
import { createCustomerValidator } from "@/utils/validators/createCustomerValidator";
import { CustomerBillAddr, CustomerInfo, CustomerShipAddr } from "@prisma/client";
import { createQuickbooksCustomerSyncRecord } from "../database/mutations";

export const createCustomer = async (payload: {
  user_id: string;
  email: string;
  customerInfo: CustomerInfo | null;
  customerShipAddr: CustomerShipAddr | null;
  customerBillAddr: CustomerBillAddr | null;
}) => {
  const { email, customerInfo, customerShipAddr, customerBillAddr } = payload;
  const { validator } = createCustomerValidator;
  try {
    const safeParse = validator.safeParse({
      DisplayName: customerInfo?.companyName,
      GivenName: customerInfo?.givenName,
      FamilyName: customerInfo?.familyName,
      PrimaryPhone: {
        FreeFormNumber: customerInfo?.phoneNumber
      },
      CompanyName: customerInfo?.companyName,
      PrimaryEmailAddr: {
        Address: email
      },
      BillAddr: {
        Line1: customerBillAddr?.line1,
        City: customerBillAddr?.city,
        Country: customerBillAddr?.country,
        CountrySubDivisionCode: customerBillAddr?.state,
        PostalCode: customerBillAddr?.postalCode
      },
      ShipAddr: {
        Line1: customerShipAddr?.line1,
        City: customerShipAddr?.city,
        Country: customerShipAddr?.country,
        CountrySubDivisionCode: customerShipAddr?.state,
        PostalCode: customerShipAddr?.postalCode
      }
    });

    if (safeParse.error) {
      const invalidData = safeParse.error.issues.map((e) => e.path[0]);
      throw new Error(`Create Customer Errors: ${invalidData.join(", ")}`);
    }

    const qbToken = await getQBTokensOrThrow();
    const accessToken = await decrypt(
      qbToken.encrypted_access_token,
      qbToken.access_token_iv
    );

    console.log("req data", {
      baseUrl: `${qb_base_url}/company/${qbToken.realm_id}/customer?minorversion=73`,
      bodyJSON: safeParse.data
    });

    const { error, response } = await fetcher<CustomerResponse>({
      options: {
        fetchOptions: {
          baseUrl: `${qb_base_url}/company/${qbToken.realm_id}/customer?minorversion=73`,
          init: {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`
            },
            body: JSON.stringify(safeParse.data)
          }
        }
      }
    });

    if (error) {
      throw new Error(error);
    }

    if (!response) {
      throw new Error("Unable to process request");
    }

    await createQuickbooksCustomerSyncRecord({
      id: response.Customer.Id,
      companyName: response.Customer.CompanyName,
      user_id: payload.user_id
    });

    console.log({ response });

    return { Id: response.Customer.Id, CompanyName: response.Customer.CompanyName };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }

    throw new Error("Unexpected Server Error");
  }
};
