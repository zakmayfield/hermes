"use server";

import { qb_base_url } from "@/utils/qb/constants";
import { handleDecryptAccessToken } from "@/utils/qb";
import { CustomerBillAddr, CustomerInfo, CustomerShipAddr } from "@prisma/client";
import { createQuickbooksCustomerSyncRecord } from "@/data/database/mutations";
import { customerValidators } from "@/data/qb/validators";

export const createCustomer = async (payload: {
  user_id: string;
  email: string;
  customerInfo: CustomerInfo | null;
  customerShipAddr: CustomerShipAddr | null;
  customerBillAddr: CustomerBillAddr | null;
}) => {
  const { email, customerInfo, customerShipAddr, customerBillAddr } = payload;
  const { createInput } = customerValidators;
  try {
    const safeParseInput = createInput.safeParse({
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

    if (safeParseInput.error) {
      const invalidData = safeParseInput.error.issues.map((e) => e.path[0]);
      throw new Error(`Create Customer Errors: ${invalidData.join(", ")}`);
    }

    const accessToken = await handleDecryptAccessToken();

    const res = await fetch(
      `${qb_base_url}/company/${accessToken.realmId}/customer?minorversion=73`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken.accessToken}`
        },
        body: JSON.stringify(safeParseInput.data)
      }
    );

    if (!res.ok) {
      const errorCode = await res.json().then((data) => data.Fault.Error[0].code);
      if (errorCode === "6240") {
        throw new Error(
          `Duplicate Company Name: ${safeParseInput.data.CompanyName} already exists`
        );
      }

      throw new Error("Error creating customer");
    }

    const data = await res.json();

    const safeParseResponse = customerValidators.createResponse.safeParse(data);
    if (safeParseResponse.error) {
      throw new Error("Recieved unexpected data");
    }

    await createQuickbooksCustomerSyncRecord({
      id: data.Customer.Id,
      companyName: data.Customer.CompanyName,
      user_id: payload.user_id
    });

    return { Id: data.Customer.Id, CompanyName: data.Customer.CompanyName };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }

    throw new Error("Unexpected Server Error");
  }
};
