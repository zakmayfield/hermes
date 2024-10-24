"use client";
import { formHooks } from "@/shared/hooks";
import { Form2 } from "@/tw-styled/ui";
import { FormProvider } from "react-hook-form";
import { AuthInputs } from "../atoms";

export const SignUpForm = () => {
  const { methods, submitHandler } = formHooks.useSignUpForm();

  return (
    <div>
      <FormProvider {...methods}>
        <Form2
          submitHandler={submitHandler}
          buttonProps={{
            text: "Sign Up",
            variant: "primary"
          }}
          style={{ formStyles: { backgroundColor: "primary" } }}
        >
          <AuthInputs />
        </Form2>
      </FormProvider>
    </div>
  );
};
