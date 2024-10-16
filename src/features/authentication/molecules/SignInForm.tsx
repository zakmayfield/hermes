"use client";
import { Form } from "@/tw-styled/ui";
import { formHooks } from "@/shared/hooks";
import { FormProvider } from "react-hook-form";
import { AuthInputs } from "../atoms/Inputs";

export const SignInForm = () => {
  const { submitHandler, methods } = formHooks.useSignInForm();

  return (
    <div>
      <FormProvider {...methods}>
        <Form
          titleText="Sign In"
          submitHandler={submitHandler}
          buttonProps={{
            text: "Sign In",
            variant: "primary"
          }}
          style={{ formStyles: { backgroundColor: "primary" } }}
        >
          <AuthInputs />
        </Form>
      </FormProvider>
    </div>
  );
};
