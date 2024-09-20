"use client";

import { customHooks } from "./useCustom";
import { utilityHooks } from "./useUtilities";
import { validators } from "../validators";

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
