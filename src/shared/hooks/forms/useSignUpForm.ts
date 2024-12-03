import { signIn, SignInResponse } from "next-auth/react";
import { useMutation } from "@tanstack/react-query";
import { signupValidator } from "@/utils/validators/forms/signupValidator";
import { useForm } from "react-hook-form";

export const useSignUpForm = () => {
  const { defaultValues, resolver } = signupValidator;

  type FormData = typeof defaultValues;
  type Response = SignInResponse | undefined;

  const signUpMutation = async (data: FormData) => {
    const serializedData = JSON.stringify(data);

    // `signIn` sends data within the request body as `URLSearchParams`: node_modules/next-auth/src/react/index.tsx
    // req.body must be serialized so the objects get flattened into a string of `[object object]`
    // Need to serialize the data before we send it, and then parse the data when the credentials
    // are received within the provider
    return await signIn("sign-up", { data: serializedData });
  };

  const { mutate } = useMutation({
    mutationFn: signUpMutation
  });

  const methods = useForm<FormData, Response>({
    defaultValues: { ...defaultValues },
    resolver
  });

  const onSubmit = (data: FormData) => {
    mutate(data);
    methods.reset();
  };

  const submitHandler = methods.handleSubmit(onSubmit);

  return { methods, submitHandler };
};
