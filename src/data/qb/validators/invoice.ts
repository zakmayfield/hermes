import { z } from "zod";

const lineItemSchema = z.discriminatedUnion("DetailType", [
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
]);

const invoice = z.object({
  AllowIPNPayment: z.boolean(),
  AllowOnlinePayment: z.boolean(),
  AllowOnlineCreditCardPayment: z.boolean(),
  AllowOnlineACHPayment: z.boolean(),
  InvoiceLink: z.string(),
  domain: z.string(),
  sparse: z.boolean(),
  Id: z.string(),
  SyncToken: z.string(),
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
  Line: z.array(lineItemSchema),
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
  DueDate: z.string(),
  GlobalTaxCalculation: z.string(),
  TotalAmt: z.number(),
  PrintStatus: z.string(),
  EmailStatus: z.string(),
  BillEmail: z.object({
    Address: z.string()
  }),
  Balance: z.number()
});

const readResponse = z.object({
  Invoice: invoice,
  time: z.string()
});

export type InvoiceReadResponse = z.infer<typeof readResponse>;

const createInput = z.object({
  CustomerRef: z.object({
    value: z.string()
  }),
  BillEmail: z.object({
    Address: z.string()
  }),
  DueDate: z.string(),
  Line: z.array(
    z.object({
      DetailType: z.literal("SalesItemLineDetail"),
      Amount: z.number(),
      SalesItemLineDetail: z.object({
        ItemRef: z.object({
          name: z.string(),
          value: z.string()
        }),
        Qty: z.number()
      })
    })
  )
});

export type InvoiceCreateInput = z.infer<typeof createInput>;
export type InvoiceCreateResponse = z.infer<typeof readResponse>;

const emptyQuery = z.object({
  QueryResponse: z.object({}),
  time: z.string()
});

const invoiceQuery = z.object({
  QueryResponse: z.object({
    Invoice: z.array(invoice),
    startPosition: z.number(),
    maxResults: z.number(),
    totalCount: z.number()
  }),
  time: z.string()
});

const invoiceQueryResponse = invoiceQuery.or(emptyQuery);

export const invoiceValidators = {
  readResponse,
  createInput,
  invoiceQueryResponse
};
