import { formHooks } from "@/shared/hooks";
import { Form } from "@/tw-styled/ui";

export const SignInForm = () => {
  const { FormProvider, submitHandler, methods } = formHooks.useSignInForm();

  return (
    <FormProvider>
      <Form
        submitHandler={submitHandler}
        style={{ formStyles: { place: "center" } }}
      >
        <input {...methods.register("email")} />
        <input {...methods.register("password")} />
      </Form>
    </FormProvider>
  );
};
