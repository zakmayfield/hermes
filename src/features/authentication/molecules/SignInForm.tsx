"use client";
import { Form2 } from "@/tw-styled/ui";
import { formHooks } from "@/shared/hooks";
import { FormProvider } from "react-hook-form";
import { AuthInputs } from "../atoms/Inputs";

export const SignInForm = () => {
  const { submitHandler, methods } = formHooks.useSignInForm();

  return (
    <div>
      <FormProvider {...methods}>
        <Form2
          submitHandler={submitHandler}
          buttonProps={{
            text: "Sign In",
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
