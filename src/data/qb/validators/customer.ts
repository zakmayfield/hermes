import { z } from "zod";

// BASE CUSTOMER
const customer = z.object({
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
  Notes: z.string(),
  Job: z.boolean(),
  BillWithParent: z.boolean(),
  PaymentMethodRef: z.object({
    value: z.string()
  }),
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

export type Customer = z.infer<typeof customer>;

// CREATE
const createInput = z.object({
  DisplayName: z.string(),
  GivenName: z.string(),
  FamilyName: z.string(),
  PrimaryPhone: z.object({
    FreeFormNumber: z.string()
  }),
  CompanyName: z.string(),
  PrimaryEmailAddr: z.object({
    Address: z.string().email()
  }),
  BillAddr: z.object({
    Line1: z.string(),
    City: z.string(),
    Country: z.string(),
    CountrySubDivisionCode: z.string(),
    PostalCode: z.string()
  }),
  ShipAddr: z.object({
    Line1: z.string(),
    City: z.string(),
    Country: z.string(),
    CountrySubDivisionCode: z.string(),
    PostalCode: z.string()
  })
});

const createResponse = z.object({
  Customer: z.object({
    Taxable: z.boolean(),
    BillAddr: z.object({
      Line1: z.string(),
      City: z.string(),
      Country: z.string(),
      CountrySubDivisionCode: z.string(),
      PostalCode: z.string()
    }),
    ShipAddr: z.object({
      Line1: z.string(),
      City: z.string(),
      Country: z.string(),
      CountrySubDivisionCode: z.string(),
      PostalCode: z.string()
    }),
    Job: z.boolean(),
    BillWithParent: z.boolean(),
    Balance: z.number(),
    BalanceWithJobs: z.number(),
    CurrencyRef: z.object({
      value: z.string(),
      name: z.string()
    }),
    PreferredDeliveryMethod: z.string(),
    IsProject: z.boolean(),
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
    PrimaryPhone: z.object({
      FreeFormNumber: z.string()
    }),
    PrimaryEmailAddr: z.object({
      Address: z.string().email()
    })
  }),
  time: z.string()
});

export type CustomerCreateInput = z.infer<typeof createInput>;
export type CustomerCreateResponse = z.infer<typeof createResponse>;

// READ
const readResults = z.object({
  Customer: customer,
  time: z.string()
});

export type CustomerRead = z.infer<typeof readResults>;

// QUERY
const emptyQuery = z.object({
  QueryResponse: z.object({}),
  time: z.string()
});

const query = z.object({
  QueryResponse: z.object({
    Customer: z.array(customer),
    startPosition: z.number(),
    maxResults: z.number()
  }),
  time: z.string()
});

const queryResults = query.or(emptyQuery);

export type CustomerQueryResults = z.infer<typeof queryResults>;
export type CustomerQuery = z.infer<typeof query>;
export type CustomerEmptyQuery = z.infer<typeof emptyQuery>;

export const customerValidators = {
  customer,
  createInput,
  createResponse,
  readResults,
  query: queryResults
};
