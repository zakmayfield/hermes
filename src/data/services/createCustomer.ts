"use server";

import { createCustomerValidator } from "@/utils/validators/createCustomerValidator";
import { CustomerBillAddr, CustomerInfo, CustomerShipAddr } from "@prisma/client";

export const createCustomer = async (payload: {
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
      console.log("safeParse Error", safeParse.error.issues);
      const invalidData = safeParse.error.issues.map((e) => e.path[0]);
      throw new Error(`Create Customer Errors: ${invalidData.join(", ")}`);
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }

    throw new Error("Unexpected Server Error");
  }
};
