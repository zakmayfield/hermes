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

export const authorizedAdminsValidator = () => {
  const validator = z.object({
    email: z.string().email()
  });

  const { defaultValues, resolver } = handleValidator(validator);

  return { defaultValues, resolver };
};

// TODO: *** Implement change password validator ***
export const changePasswordValidator = () => {};
