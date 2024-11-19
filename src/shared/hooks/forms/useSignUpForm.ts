import { signIn, SignInResponse } from "next-auth/react";
import { useFormContext } from "./useFormContext";
import { authValidator } from "@/utils/validators/formValidators";
import { useMutation } from "@tanstack/react-query";

export const useSignUpForm = () => {
  const formMeta = authValidator();

  type FormData = typeof formMeta.defaultValues;
  type Response = SignInResponse | undefined;

  const signUpMutation = async (data: FormData) => await signIn("sign-up", data);
  const { mutate } = useMutation({
    mutationFn: signUpMutation
  });

  return useFormContext<FormData, Response>({ ...formMeta, mutate });
};
