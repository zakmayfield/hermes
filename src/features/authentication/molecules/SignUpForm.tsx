"use client";
import { formHooks } from "@/shared/hooks";
import { Form } from "@/tw-styled/ui";
import { FormProvider } from "react-hook-form";
import { AuthInputs } from "../atoms";

export const SignUpForm = () => {
  const { methods, submitHandler } = formHooks.useSignUpForm();

  return (
    <div>
      <FormProvider {...methods}>
        <Form
          titleText="Sign Up"
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
