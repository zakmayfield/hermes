type Customer = {
  Taxable: boolean;
  BillAddr: {
    Id: string;
    Line1: string;
    City: string;
    Country: string;
    CountrySubDivisionCode: string;
    PostalCode: string;
  };
  ShipAddr: {
    Id: string;
    Line1: string;
    City: string;
    Country: string;
    CountrySubDivisionCode: string;
    PostalCode: string;
  };
  Notes: string;
  Job: boolean;
  BillWithParent: boolean;
  PaymentMethodRef: {
    value: string;
  };
  Balance: number;
  BalanceWithJobs: number;
  CurrencyRef: {
    value: string;
    name: string;
  };
  PreferredDeliveryMethod: string;
  IsProject: boolean;
  ClientEntityId: string;
  domain: string;
  sparse: boolean;
  Id: string;
  SyncToken: string;
  MetaData: {
    CreateTime: string;
    LastUpdatedTime: string;
  };
  GivenName: string;
  FamilyName: string;
  FullyQualifiedName: string;
  CompanyName: string;
  DisplayName: string;
  PrintOnCheckName: string;
  Active: boolean;
  V4IDPseudonym: string;
  PrimaryPhone: {
    FreeFormNumber: string;
  };
  PrimaryEmailAddr: {
    Address: string;
  };
};

export type CustomerQueryResponse = {
  QueryResponse: {
    Customer: Customer[];
    startPosition: 1;
    maxResults: 1;
  };
  time: string;
};

export type CustomerReadResponse = {
  Customer: Customer;
  time: string;
};

export type CreateCustomerData = {
  DisplayName: string;
  GivenName: string;
  FamilyName: string;
  PrimaryPhone: {
    FreeFormNumber: string;
  };
  CompanyName: string;
  PrimaryEmailAddr: {
    Address: string;
  };
  BillAddr: {
    Line1: string;
    City: string;
    Country: string;
    CountrySubDivisionCode: string;
    PostalCode: string;
  };
  ShipAddr: {
    Line1: string;
    City: string;
    Country: string;
    CountrySubDivisionCode: string;
    PostalCode: string;
  };
};
