import { Form, Input } from "@/shared/components/form";
import { formHooks } from "@/shared/hooks";

export const SignInForm = () => {
  const { register, onSubmit, errors, isPending } = formHooks.useSignInForm();

  return (
    <Form
      onSubmit={onSubmit}
      title="Sign In"
      buttonText="Sign In"
      isPending={isPending}
      classList={{
        formClassName: "bg-slate-900 rounded-lg py-12"
      }}
    >
      <Input
        name="email"
        label="Email"
        register={register}
        error={errors.email}
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
