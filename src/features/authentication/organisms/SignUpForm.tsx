import { Form, Input } from "@/shared/components/form";
import { formHooks } from "@/shared/hooks";

export const SignUpForm = () => {
  const { register, onSubmit, formErrors, isPending } = formHooks.useSignUpForm();

  return (
    <Form
      onSubmit={onSubmit}
      title="Sign Up"
      buttonText="Sign Up"
      isPending={isPending}
      classList={{
        formClassName: "bg-slate-900 rounded-lg py-12"
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
