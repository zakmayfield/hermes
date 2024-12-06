"use server";

import { handleDecryptAccessToken } from "@/utils/qb";
import { qb_base_url } from "@/utils/qb/constants";
import { CreateInvoiceResponse } from "@/data/qb/validators/invoice";
import { Order, OrderItem } from "@prisma/client";

const testInvoiceData = {
  CustomerRef: {
    value: "77"
  },
  BillEmail: {
    Address: "foo@foobar.com"
  },
  DueDate: "2024-12-4",
  Line: [
    {
      DetailType: "SalesItemLineDetail",
      Amount: 1.0,
      SalesItemLineDetail: {
        ItemRef: {
          name: "FOO-1",
          value: "45"
        },
        Qty: 1.0
      }
    },
    {
      DetailType: "SalesItemLineDetail",
      Amount: 1.0,
      SalesItemLineDetail: {
        ItemRef: {
          name: "BAR-1",
          value: "50"
        },
        Qty: 1.0
      }
    }
  ]
};

export const createInvoice = async (order: {
  order: Order & { items: OrderItem[] };
}): Promise<CreateInvoiceResponse> => {
  try {
    const { accessToken, realmId } = await handleDecryptAccessToken();

    const res = await fetch(`${qb_base_url}/company/${realmId}/invoice?minorversion=73`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`
      },
      body: JSON.stringify(testInvoiceData)
    });

    if (!res.ok) {
      console.error(await res.text());
      throw new Error(res.statusText);
    }

    const data = await res.json();

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw new Error(error.message);
    }
    console.error(error);
    throw new Error("Unexpected Server Error");
  }
};
