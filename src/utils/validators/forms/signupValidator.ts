import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { inputValidators } from "../inputValidators";

const {
  emailValidator,
  passwordValidator,
  phoneNumberValidator,
  booleanValidator,
  stringValidator
} = inputValidators;

const customerSchema = z.object({
  email: emailValidator,
  password: passwordValidator,
  companyName: stringValidator,
  givenName: z.optional(stringValidator),
  familyName: z.optional(stringValidator),
  phoneNumber: z.optional(phoneNumberValidator),
  isExistingCustomer: booleanValidator,
  isBillingSameAsShipping: booleanValidator
});

const addrSchema = z.object({
  line1: stringValidator,
  city: stringValidator,
  country: stringValidator,
  state: stringValidator,
  postalCode: stringValidator
});

const validator = z.object({
  customer: customerSchema,
  ship: z.optional(addrSchema),
  bill: z.optional(addrSchema)
});

type DefaultDataType = z.infer<typeof validator>;

export const signupValidator = {
  validator,
  resolver: zodResolver(validator),
  defaultValues: {
    customer: {
      email: "",
      password: "",
      givenName: "",
      familyName: "",
      companyName: "",
      phoneNumber: "",
      isExistingCustomer: true,
      isBillingSameAsShipping: false
    },
    ship: {
      line1: "",
      city: "",
      country: "",
      state: "",
      postalCode: ""
    },
    bill: {
      line1: "",
      city: "",
      country: "",
      state: "",
      postalCode: ""
    }
  } as DefaultDataType
};
