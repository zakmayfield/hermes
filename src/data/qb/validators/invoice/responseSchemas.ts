import { z } from "zod";
import { Invoice, time } from "./invoiceSchema";

export const invoiceResponseSchemas = {
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

export type ReadInvoiceResponse = z.infer<typeof invoiceResponseSchemas.read>;
export type CreateInvoiceResponse = z.infer<typeof invoiceResponseSchemas.create>;
export type QueryInvoiceResponse = z.infer<typeof invoiceResponseSchemas.query>;
