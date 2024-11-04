"use client";
import { formHooks } from "@/shared/hooks";
import { FormProvider } from "react-hook-form";
import { AuthInputs } from "../atoms/Inputs";
import { Button, Form } from "@/ui/components";

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
          <Button options={{ variant: "primary" }}>Sign In</Button>
        </Form>
      </FormProvider>
    </div>
  );
};
