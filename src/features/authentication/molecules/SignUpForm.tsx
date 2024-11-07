"use client";
import { formHooks } from "@/shared/hooks";
import { FormProvider } from "react-hook-form";
import { AuthInputs } from "../atoms";
import { Form, SubmitButton } from "@/ui/components";

export const SignUpForm = () => {
  const { methods, submitHandler } = formHooks.useSignUpForm();

  return (
    <div>
      <FormProvider {...methods}>
        <Form
          submitHandler={submitHandler}
          style={{ form: { backgroundColor: "primary", width: "md", padding: "lg" } }}
        >
          <AuthInputs />
          <SubmitButton
            options={{ text: "Sign In", variant: "primary" }}
            style={{ padding: "sm" }}
          />
        </Form>
      </FormProvider>
    </div>
  );
};
