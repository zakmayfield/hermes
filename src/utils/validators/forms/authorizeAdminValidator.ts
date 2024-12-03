import { z } from "zod";
import { inputValidators } from "../inputValidators";
import { zodResolver } from "@hookform/resolvers/zod";

const { emailValidator } = inputValidators;

const validator = z.object({
  email: emailValidator
});

type DefaultDataType = z.infer<typeof validator>;

export const authorizeAdminValidator = {
  validator,
  resolver: zodResolver(validator),
  defaultValues: {
    email: ""
  } as DefaultDataType
};
