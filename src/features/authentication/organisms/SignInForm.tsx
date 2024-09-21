import { Form, Input } from "@/shared/components/form";
import { formHooks } from "@/shared/hooks";

export const SignInForm = () => {
  const { register, onSubmit, errors, isPending } = formHooks.useSignInForm();
  return (
    <Form
      onSubmit={onSubmit}
      title="Sign In"
      isPending={isPending}
    >
      <Input
        name="email"
        label="Email"
        register={register}
        error={errors.email}
        // TODO: is_error_hidden is broken
      />
      <Input
        type="password"
        name="password"
        label="Password"
        register={register}
        error={errors.password}
      />
    </Form>
  );
};
