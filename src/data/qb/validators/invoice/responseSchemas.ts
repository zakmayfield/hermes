import { z } from "zod";
import { Invoice, time } from "./invoiceSchema";

export const responseSchemas = {
  read: z.object({
    Invoice,
    time
  }),
  create: z.object({
    Invoice,
    time
  }),
  query: z
    .object({
      QueryResponse: z.object({
        Invoice: z.array(Invoice),
        startPosition: z.number(),
        maxResults: z.number(),
        totalCount: z.number()
      }),
      time
    })
    .or(
      z.object({
        QueryResponse: z.object({}),
        time
      })
    )
};

export type ReadInvoiceResponse = z.infer<typeof responseSchemas.read>;
export type CreateInvoiceResponse = z.infer<typeof responseSchemas.create>;
export type QueryInvoiceResponse = z.infer<typeof responseSchemas.query>;
