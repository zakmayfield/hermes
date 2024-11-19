import { authValidator } from "@/utils/validators/formValidators";
import { useMutation } from "@tanstack/react-query";
import { signIn, SignInResponse } from "next-auth/react";
import { useFormContext } from "./useFormContext";

export const useSignInForm = () => {
  const formMeta = authValidator();

  type FormData = typeof formMeta.defaultValues;
  type Response = SignInResponse | undefined;

  const signInMutation = async (data: FormData) => await signIn("sign-in", data);
  const { mutate } = useMutation({
    mutationFn: signInMutation
  });

  return useFormContext<FormData, Response>({ ...formMeta, mutate });
};
