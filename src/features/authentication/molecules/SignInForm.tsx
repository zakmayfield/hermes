"use client";
import { Form } from "@/tw-styled/ui";
import { formHooks } from "@/shared/hooks";
import { FormProvider } from "react-hook-form";
import { AuthInputs } from "../atoms/Inputs";
import { TestingContext } from "@/features/TestingContext";

export const SignInForm = () => {
  const { submitHandler, methods } = formHooks.useSignInForm();

  return (
    <div>
      <TestingContext />
      <FormProvider {...methods}>
        <Form
          titleText="Sign In"
          submitHandler={submitHandler}
          style={{
            formStyles: { place: "center" }
          }}
        >
          <AuthInputs />
        </Form>
      </FormProvider>
    </div>
  );
};
