"use client";

import { customHooks } from "./useCustom";
import { validators } from "../validators";
import { signIn, SignInResponse } from "next-auth/react";
import { useFormCtx } from "./useFormCtx";
import { useToast } from "./useToast";

export const formHooks = {
  useTestForm: () => {
    const formMeta = validators.getTestFormValidator();

    // define mutation logic
    type FormData = typeof formMeta.defaultValues;
    type Response = { x: string };

    const testMutation = async (formData: FormData) => {
      // throw new Error("Test Error");
      console.log({ formData });
      return { x: "foobar" };
    };

    const { mutate } = customHooks.useCustomMutation({
      mutationFn: testMutation,
      handleSuccess(data) {
        console.log({ response: data });
      },
      handleError(error) {
        console.log({ error });
      }
    });

    return useFormCtx<FormData, Response>({ ...formMeta, mutate });
  },

  useSignUpForm: () => {
    const formMeta = validators.authValidator();

    type FormData = typeof formMeta.defaultValues;
    type Response = SignInResponse | undefined;

    const signUpMutation = async (data: FormData) => await signIn("sign-up", data);
    const { mutate } = customHooks.useCustomMutation({
      mutationFn: signUpMutation
    });

    return useFormCtx<FormData, Response>({ ...formMeta, mutate });
  },

  useSignInForm: () => {
    const formMeta = validators.authValidator();

    type FormData = typeof formMeta.defaultValues;
    type Response = SignInResponse | undefined;

    const signInMutation = async (data: FormData) => await signIn("sign-in", data);
    const { mutate } = customHooks.useCustomMutation({
      mutationFn: signInMutation
    });

    return useFormCtx<FormData, Response>({ ...formMeta, mutate });
  },

  useChangePasswordForm: () => {
    const { toast } = useToast();

    const { mutate } = customHooks.useCustomMutation<void, { x: string; y: string }>({
      mutationFn: async () => {},
      handleError(error) {
        toast(error.message, "error");
      },
      handleSuccess() {
        toast("success"), handleReset();
      }
    });

    const { register, onSubmit, handleReset } = customHooks.useCustomForm({
      defaultValues: { x: "", y: "" },
      mutate
    });

    return { register, onSubmit };
  }
};
