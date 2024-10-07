import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const useValidator = <T extends z.ZodTypeAny>(validator: T) => {
  type DefaultValues = z.infer<T>;

  return {
    defaultValues: validator.default as DefaultValues,
    resolver: zodResolver(validator)
  };
};

export const validators = {
  getTestFormValidator: () => {
    const validator = z.object({
      test_1: z.string().min(1, { message: "test_1 is required" }),
      test_2: z.string().min(1, { message: "test_2 is required" })
    });

    return useValidator(validator);
  },

  getSignUpFormValidator: () => {
    const validator = z.object({
      email: z.string().email(),
      password: z.string().min(1, { message: "Password is required" })
    });

    const { defaultValues, resolver } = useValidator(validator);

    return {
      defaultValues,
      resolver
    };
  },

  getSignInFormValidator: () => {
    const validator = z.object({
      email: z.string().email(),
      password: z.string().min(1, { message: "Password is required" })
    });

    const { defaultValues, resolver } = useValidator(validator);

    return {
      defaultValues,
      resolver
    };
  }
};
