import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const handleValidator = <T extends z.ZodTypeAny>(validator: T) => {
  type DefaultValues = z.infer<T>;

  return {
    defaultValues: validator.default as DefaultValues,
    resolver: zodResolver(validator)
  };
};

export const testFormValidator = () => {
  const validator = z.object({
    test_1: z.string().min(1, { message: "test_1 is required" }),
    test_2: z.string().min(1, { message: "test_2 is required" })
  });

  return {
    resolver: zodResolver(validator),
    defaultValues: { test_1: "", test_2: "" } as z.infer<typeof validator>
  };
};

export const authValidator = () => {
  const validator = z.object({
    email: z.string().email(),
    password: z.string().min(1, { message: "Password is required" })
  });

  const { defaultValues, resolver } = handleValidator(validator);

  return {
    defaultValues,
    resolver
  };
};

export const signupValidator = () => {
  const customerSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1, { message: "Password is required" }),
    isExistingCustomer: z.boolean(),
    givenName: z.optional(z.string()),
    familyName: z.optional(z.string()),
    companyName: z.optional(z.string()),
    phoneNumber: z.optional(
      z.string().regex(/^\d{10}$/, "Phone number must be 10 digits")
    ),
    isBillingSameAsShipping: z.boolean()
  });

  const addressSchema = z.object({
    line1: z.string(),
    city: z.string(),
    country: z.string(),
    state: z.string(),
    postalCode: z.string()
  });

  const validator = z.object({
    customerInfo: customerSchema,
    shipAddr: z.optional(addressSchema),
    billAddr: z.optional(addressSchema)
  });

  type DefaultDataType = z.infer<typeof validator>;

  return {
    validator,
    defaultValues: {
      customerInfo: {
        email: "",
        password: "",
        isExistingCustomer: true,
        givenName: "",
        familyName: "",
        companyName: "",
        phoneNumber: "",
        isBillingSameAsShipping: false
      },
      shipAddr: {
        line1: "",
        city: "",
        country: "",
        state: "",
        postalCode: ""
      },
      billAddr: {
        line1: "",
        city: "",
        country: "",
        state: "",
        postalCode: ""
      }
    } as DefaultDataType,
    resolver: zodResolver(validator)
  };
};

export const authorizedAdminsValidator = () => {
  const validator = z.object({
    email: z.string().email()
  });

  const { defaultValues, resolver } = handleValidator(validator);

  return { defaultValues, resolver };
};

// TODO: *** Implement change password validator ***
export const changePasswordValidator = () => {};
