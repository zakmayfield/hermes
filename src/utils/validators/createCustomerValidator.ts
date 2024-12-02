import { z } from "zod";
import { inputValidators } from "./inputValidators";

const { stringValidator, emailValidator } = inputValidators;

const validator = z.object({
  DisplayName: stringValidator,
  GivenName: stringValidator,
  FamilyName: stringValidator,
  PrimaryPhone: z.object({
    FreeFormNumber: stringValidator
  }),
  CompanyName: stringValidator,
  PrimaryEmailAddr: z.object({
    Address: emailValidator
  }),
  BillAddr: z.object({
    Line1: stringValidator,
    City: stringValidator,
    Country: stringValidator,
    CountrySubDivisionCode: stringValidator,
    PostalCode: stringValidator
  }),
  ShipAddr: z.object({
    Line1: stringValidator,
    City: stringValidator,
    Country: stringValidator,
    CountrySubDivisionCode: stringValidator,
    PostalCode: stringValidator
  })
});

export const createCustomerValidator = {
  validator
};
