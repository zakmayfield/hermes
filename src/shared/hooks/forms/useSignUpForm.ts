import { signIn, SignInResponse } from "next-auth/react";
import { useFormContext } from "./useFormContext";
import { signupValidator } from "@/utils/validators/formValidators";
import { useMutation } from "@tanstack/react-query";

export const useSignUpForm = () => {
  const formMeta = signupValidator();

  type FormData = typeof formMeta.defaultValues;
  type Response = SignInResponse | undefined;

  const signUpMutation = async (data: FormData) => await signIn("sign-up", data);

  const { mutate } = useMutation({
    mutationFn: signUpMutation
  });

  return useFormContext<FormData, Response>({ ...formMeta, mutate });
};
