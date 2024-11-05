"use client";
import { formHooks } from "@/shared/hooks";
import { FormProvider } from "react-hook-form";
import { AuthInputs } from "../atoms/Inputs";
import { Form, SubmitButton } from "@/ui/components";

export const SignInForm = () => {
  const { submitHandler, methods } = formHooks.useSignInForm();

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
