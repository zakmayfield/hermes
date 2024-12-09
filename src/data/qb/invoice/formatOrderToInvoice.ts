"use server";

import { getQbSyncRecordOrThrow } from "@/data/database/quickbooks";
import { Order, OrderItem } from "@prisma/client";
import { getCustomerById } from "../customer";
import { CreateInvoiceRequest, LineItemRequestType } from "../validators/invoice";
import { getItemRef } from "../item";
import { getProductsFromOrderId } from "@/data/database/product";

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

    const productNamesAndQuantity = await getProductsFromOrderId(order.orderId).then(
      (d) =>
        d.map((product) => ({
          name: product.code.split(":")[1],
          quantity:
            order.items.find((or) => or.productId === product.productId)?.quantity || 1
        }))
    );

    const itemRefs = await Promise.all(
      productNamesAndQuantity.map(async (u) => await getItemRef(u.name))
    );

    const lineItems: LineItemRequestType[] = itemRefs.map((itemRef) => ({
      DetailType: "SalesItemLineDetail",
      Amount: 1,
      SalesItemLineDetail: {
        Qty:
          productNamesAndQuantity.find((product) => product.name === itemRef.name)
            ?.quantity || 1,
        ItemRef: itemRef
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
