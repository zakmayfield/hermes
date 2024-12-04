import { z } from "zod";

export const requestSchemas = {
  create: z.object({
    CustomerRef: z.object({
      value: z.string()
    }),
    BillEmail: z.object({
      Address: z.string()
    }),
    DueDate: z.string(),
    Line: z.array(
      z
        .object({
          DetailType: z.literal("SalesItemLineDetail"),
          Amount: z.number(),
          SalesItemLineDetail: z.object({
            ItemRef: z.object({
              value: z.string(),
              name: z.string()
            }),
            Qty: z.number()
          })
        })
        .optional()
    )
  })
};

export type CreateInvoiceRequest = z.infer<typeof requestSchemas.create>;
