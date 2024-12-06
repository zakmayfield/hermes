import { z } from "zod";

export const time = z.string();

export const Customer = z.object({
  Taxable: z.boolean(),
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
  Notes: z.string().optional(),
  Job: z.boolean(),
  BillWithParent: z.boolean(),
  PaymentMethodRef: z
    .object({
      value: z.string()
    })
    .optional(),
  Balance: z.number(),
  BalanceWithJobs: z.number(),
  CurrencyRef: z.object({
    value: z.string(),
    name: z.string()
  }),
  PreferredDeliveryMethod: z.string(),
  IsProject: z.boolean(),
  ClientEntityId: z.string(),
  domain: z.string(),
  sparse: z.boolean(),
  Id: z.string(),
  SyncToken: z.string(),
  MetaData: z.object({
    CreateTime: z.string(),
    LastUpdatedTime: z.string()
  }),
  GivenName: z.string(),
  FamilyName: z.string(),
  FullyQualifiedName: z.string(),
  CompanyName: z.string(),
  DisplayName: z.string(),
  PrintOnCheckName: z.string(),
  Active: z.boolean(),
  V4IDPseudonym: z.string(),
  PrimaryPhone: z.object({
    FreeFormNumber: z.string()
  }),
  PrimaryEmailAddr: z.object({
    Address: z.string()
  })
});
