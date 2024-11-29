import { signIn, SignInResponse } from "next-auth/react";
import { useFormContext } from "./useFormContext";
import { useMutation } from "@tanstack/react-query";
import { signupValidator } from "@/utils/validators/forms/signupValidator";

export const useSignUpForm = () => {
  const { defaultValues, resolver } = signupValidator;

  type FormData = typeof defaultValues;
  type Response = SignInResponse | undefined;

  const signUpMutation = async (data: FormData) => await signIn("sign-up", data);

  const { mutate } = useMutation({
    mutationFn: signUpMutation
  });

  return useFormContext<FormData, Response>({ defaultValues, resolver, mutate });
};
