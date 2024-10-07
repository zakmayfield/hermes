"use client";
import { formHooks } from "@/shared/hooks";
import { Form } from "@/tw-styled/ui";
import { SignInInputs } from "./Inputs";

export const SignInForm = () => {
  const { FormProvider, submitHandler } = formHooks.useSignInForm();

  return (
    <FormProvider>
      <Form
        titleText="Sign In"
        submitHandler={submitHandler}
        style={{
          formStyles: { place: "center" }
        }}
      >
        <SignInInputs />
      </Form>
    </FormProvider>
  );
};
