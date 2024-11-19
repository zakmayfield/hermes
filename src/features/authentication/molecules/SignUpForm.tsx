"use client";
import { FormProvider } from "react-hook-form";
import { AuthInputs } from "../atoms";
import { Form, SubmitButton } from "@/ui/components";
import { useSignUpForm } from "@/shared/hooks/forms";

export const SignUpForm = () => {
  const { methods, submitHandler } = useSignUpForm();

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
