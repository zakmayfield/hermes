"use client";
import { useSignInForm } from "@/shared/hooks/forms";

export const SignInForm = () => {
  const { submitHandler, methods } = useSignInForm();

  return (
    <div>
      Sign In Form
      {/* <FormProvider {...methods}>
        <Form
          submitHandler={submitHandler}
          style={{
            form: { backgroundColor: "theme-primary", width: "md", padding: "lg" }
          }}
        >
          <AuthInputs />
          <SubmitButton
            options={{ text: "Sign In", variant: "green" }}
            style={{ padding: "sm" }}
          />
        </Form>
      </FormProvider> */}
    </div>
  );
};
