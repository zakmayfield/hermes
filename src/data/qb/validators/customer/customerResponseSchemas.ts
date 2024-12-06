import { z } from "zod";
import { Customer, time } from "./customerSchema";

export const customerResponseSchemas = {
  read: z.object({
    Customer,
    time
  })
};

export type ReadCustomerResponse = z.infer<typeof customerResponseSchemas.read>;
