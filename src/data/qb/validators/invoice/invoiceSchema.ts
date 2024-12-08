import { z } from "zod";

export const Invoice = z.object({
  Id: z.string(),
  TotalAmt: z.number(),
  Balance: z.number(),
  AllowIPNPayment: z.boolean(),
  AllowOnlinePayment: z.boolean(),
  AllowOnlineCreditCardPayment: z.boolean(),
  AllowOnlineACHPayment: z.boolean(),
  domain: z.string(),
  sparse: z.boolean(),
  SyncToken: z.string(),
  DueDate: z.string(),
  GlobalTaxCalculation: z.string(),
  PrintStatus: z.string(),
  EmailStatus: z.string(),
  InvoiceLink: z.string().optional(),
  MetaData: z.object({
    CreateTime: z.string(),
    LastUpdatedTime: z.string()
  }),
  CustomField: z.array(
    z.optional(
      z.object({
        DefinitionId: z.string(),
        StringValue: z.string(),
        Type: z.string(),
        Name: z.string()
      })
    )
  ),
  TxnDate: z.string(),
  CurrencyRef: z.object({
    value: z.string(),
    name: z.string()
  }),
  LinkedTxn: z.array(
    z.optional(
      z.object({
        TxnId: z.string(),
        TxnType: z.string()
      })
    )
  ),
  Line: z.array(
    z.discriminatedUnion("DetailType", [
      z.object({
        DetailType: z.literal("SalesItemLineDetail"),
        Id: z.string(),
        LineNum: z.number(),
        Amount: z.number(),
        SalesItemLineDetail: z.object({
          ItemRef: z.object({
            value: z.string(),
            name: z.string()
          }),
          Qty: z.number(),
          ItemAccountRef: z.object({
            value: z.string(),
            name: z.string()
          })
        })
      }),
      z.object({
        DetailType: z.literal("SubTotalLineDetail"),
        Amount: z.number(),
        SubTotalLineDetail: z.object({})
      })
    ])
  ),
  CustomerRef: z.object({
    value: z.string(),
    name: z.string()
  }),
  BillAddr: z.object({
    Id: z.string(),
    Line1: z.string(),
    City: z.string(),
    Country: z.string(),
    CountrySubDivisionCode: z.string(),
    PostalCode: z.string()
  }),
  ShipAddr: z.object({
    Id: z.string(),
    Line1: z.string(),
    City: z.string(),
    Country: z.string(),
    CountrySubDivisionCode: z.string(),
    PostalCode: z.string()
  }),
  ShipFromAddr: z.object({
    Id: z.string(),
    Line1: z.string(),
    Line2: z.string()
  }),
  BillEmail: z.object({
    Address: z.string()
  })
});

export const time = z.string();
