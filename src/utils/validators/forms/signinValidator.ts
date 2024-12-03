import { z } from "zod";
import { inputValidators } from "../inputValidators";
import { zodResolver } from "@hookform/resolvers/zod";

const { emailValidator, passwordValidator } = inputValidators;

const validator = z.object({
  email: emailValidator,
  password: passwordValidator
});

type DefaultDataType = z.infer<typeof validator>;

export const signinValidator = {
  validator,
  resolver: zodResolver(validator),
  defaultValues: {
    email: "",
    password: ""
  } as DefaultDataType
};
