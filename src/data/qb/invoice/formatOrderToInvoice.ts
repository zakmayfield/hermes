"use server";

import { getQbSyncRecordOrThrow } from "@/data/database/quickbooks";
import { Order, OrderItem } from "@prisma/client";
import { getCustomerById } from "../customer";
import { getUnitsFromOrderId } from "@/data/database/product";
import { CreateInvoiceRequest, LineItemRequestType } from "../validators/invoice";
import { getItemRef } from "../item";

export const formatOrderToInvoice = async (
  order: Order & { items: OrderItem[] }
): Promise<CreateInvoiceRequest> => {
  const { customerId } = await getQbSyncRecordOrThrow(order.userId);
  try {
    const customerData = await getCustomerById(customerId).then((c) => ({
      CustomerRef: {
        value: c.Customer.Id
      },
      BillEmail: {
        Address: c.Customer.PrimaryEmailAddr.Address
      },
      DueDate: new Date().toISOString().split("T")[0]
    }));

    const unitNamesAndQuantity = await getUnitsFromOrderId(order.orderId).then((d) =>
      d.map((u) => ({
        name: u.code.split(":")[1],
        quantity: order.items.find((or) => or.unitId === u.unitId)?.quantity || 1
      }))
    );

    const itemRefs = await Promise.all(
      unitNamesAndQuantity.map(async (u) => await getItemRef(u.name))
    );

    const lineItems: LineItemRequestType[] = itemRefs.map((ir) => ({
      DetailType: "SalesItemLineDetail",
      Amount: 1,
      SalesItemLineDetail: {
        Qty: unitNamesAndQuantity.find((u) => u.name === ir.name)?.quantity || 1,
        ItemRef: ir
      }
    }));

    const invoicePayload: CreateInvoiceRequest = {
      ...customerData,
      Line: lineItems
    };

    return invoicePayload;
  } catch (error) {
    throw new Error("Could not format order data");
  }
};
