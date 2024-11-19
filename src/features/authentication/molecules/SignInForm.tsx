"use client";
import { FormProvider } from "react-hook-form";
import { AuthInputs } from "../atoms/Inputs";
import { Form, SubmitButton } from "@/ui/components";
import { useSignInForm } from "@/shared/hooks/forms";

export const SignInForm = () => {
  const { submitHandler, methods } = useSignInForm();

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
