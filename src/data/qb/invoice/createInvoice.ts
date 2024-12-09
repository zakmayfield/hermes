"use server";

import { handleDecryptAccessToken } from "@/utils/qb";
import { qb_base_url } from "@/utils/qb/constants";
import { CreateInvoiceResponse } from "@/data/qb/validators/invoice";
import { Order, OrderItem } from "@prisma/client";
import { formatOrderToInvoice } from "./formatOrderToInvoice";

export const createInvoice = async (
  order: Order & { items: OrderItem[] }
): Promise<CreateInvoiceResponse> => {
  try {
    const { accessToken, realmId } = await handleDecryptAccessToken();
    const invoiceData = await formatOrderToInvoice(order);

    const res = await fetch(`${qb_base_url}/company/${realmId}/invoice?minorversion=73`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`
      },
      body: JSON.stringify(invoiceData)
    });

    if (!res.ok) {
      console.error(await res.text());
      throw new Error(res.statusText);
    }

    const data = await res.json();

    return data;
  } catch (error) {
    throw new Error("Unable to create invoice");
  }
};
