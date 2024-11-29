import { useMutation } from "@tanstack/react-query";
import { signIn, SignInResponse } from "next-auth/react";
import { useFormContext } from "./useFormContext";
import { signinValidator } from "@/utils/validators/forms/signinValidator";

export const useSignInForm = () => {
  const { defaultValues, resolver } = signinValidator;

  type FormData = typeof defaultValues;
  type Response = SignInResponse | undefined;

  const signInMutation = async (data: FormData) => await signIn("sign-in", data);
  const { mutate } = useMutation({
    mutationFn: signInMutation
  });

  return useFormContext<FormData, Response>({ defaultValues, resolver, mutate });
};
