"use client";
import { Form } from "@/tw-styled/ui";
import { formHooks } from "@/shared/hooks";
import { FormProvider } from "react-hook-form";
import { SignInInputs } from "./Inputs";

export const SignInForm = () => {
  const { submitHandler, methods } = formHooks.useSignInForm();

  return (
    <div className="demo-col">
      <FormProvider {...methods}>
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
    </div>
  );
};
