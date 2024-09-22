"use client";

import { customHooks } from "./useCustom";
import { utilityHooks } from "./useUtilities";
import { validators } from "../validators";
import { signIn, SignInResponse } from "next-auth/react";

export const formHooks = {
  useTestForm: () => {
    const { notify } = utilityHooks.useToast();

    const { resolver, defaultValues } = validators.getTestFormValidator();
    type TestFormData = typeof defaultValues;
    type TestFormResponse = { status: "success" | "error" };

    const { mutate } = customHooks.useCustomMutation<TestFormResponse, TestFormData>({
      mutationFn: async () => {
        return {
          status: "success"
        };
      },
      handleError(error) {
        notify(error.message, "error");
      },
      handleSuccess() {
        notify("success");
        handleReset();
      }
    });

    const {
      register,
      onSubmit,
      handleReset,
      formState: { errors }
    } = customHooks.useCustomForm<TestFormResponse, TestFormData>({
      defaultValues,
      resolver,
      mutate
    });

    return { register, onSubmit, formErrors: errors };
  },

  useSignUpForm: () => {
    const { resolver, defaultValues } = validators.getSignUpFormValidator();
    type SignUpFormData = typeof defaultValues;
    type SignUpFormResponse = SignInResponse | undefined;

    const { mutate, isPending } = customHooks.useCustomMutation<
      SignUpFormResponse,
      SignUpFormData
    >({
      mutationFn: async (data) => await signIn("sign-up", { ...data }),
      handleError(error) {
        console.log(error.message);
      }
    });

    const {
      register,
      onSubmit,
      formState: { errors }
    } = customHooks.useCustomForm<SignUpFormResponse, SignUpFormData>({
      defaultValues,
      resolver,
      mutate
    });

    return { register, onSubmit, formErrors: errors, isPending };
  },

  useSignInForm: () => {
    const { defaultValues, resolver } = validators.getSignInFormValidator();
    type SignInFormData = typeof defaultValues;
    type SignInFormResponse = SignInResponse | undefined;

    const { mutate, isPending } = customHooks.useCustomMutation<
      SignInFormResponse,
      SignInFormData
    >({
      mutationFn: async (data) => await signIn("sign-in", data)
    });

    const {
      register,
      onSubmit,
      formState: { errors }
    } = customHooks.useCustomForm<SignInFormResponse, SignInFormData>({
      defaultValues,
      resolver,
      mutate
    });

    return { register, onSubmit, errors, isPending };
  },

  useChangePasswordForm: () => {
    const { notify } = utilityHooks.useToast();

    const { mutate } = customHooks.useCustomMutation<void, { x: string; y: string }>({
      mutationFn: async () => {},
      handleError(error) {
        notify(error.message, "error");
      },
      handleSuccess() {
        notify("success"), handleReset();
      }
    });

    const { register, onSubmit, handleReset } = customHooks.useCustomForm({
      defaultValues: { x: "", y: "" },
      mutate
    });

    return { register, onSubmit };
  }
};