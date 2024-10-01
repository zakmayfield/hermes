import { formHooks } from "@/shared/hooks";
import { Form, Input } from "@/tw-styled/components";

export const SignUpForm = () => {
  const { register, onSubmit, formErrors, isPending } = formHooks.useSignUpForm();

  return (
    <Form
      onSubmit={onSubmit}
      title="Sign Up"
      buttonText="Sign Up"
      isPending={isPending}
      style={{
        form: {
          bgColor: "darker"
        }
      }}
    >
      <Input
        name="email"
        label="Email"
        register={register}
        error={formErrors.email}
      />

      <Input
        name="password"
        label="Password"
        register={register}
        error={formErrors.password}
        type="password"
      />
    </Form>
  );
};
