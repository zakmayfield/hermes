"use client";
import { formHooks } from "@/shared/hooks";
import { FormProvider } from "react-hook-form";
import { AuthInputs } from "../atoms";
import { Button, Form } from "@/ui/components";

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
          <Button options={{ variant: "primary" }}>Sign Up</Button>
        </Form>
      </FormProvider>
    </div>
  );
};
