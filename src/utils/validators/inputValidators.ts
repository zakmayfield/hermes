import { z } from "zod";

export const inputValidators = {
  stringValidator: z.string(),
  booleanValidator: z.boolean(),
  emailValidator: z.string().email(),
  passwordValidator: z
    .string({
      required_error: "Password is required"
    })
    .min(3, { message: "Password must be at least 3 characters" }),
  phoneNumberValidator: z.string()
};
