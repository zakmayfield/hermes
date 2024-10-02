import { formHooks } from "@/shared/hooks";
import { Form, Heading, Input } from "@/tw-styled/components";

export const SignInForm = () => {
  const { register, onSubmit, errors, isPending } = formHooks.useSignInForm();

  return (
    <Form
      onSubmit={onSubmit}
      title="Sign In"
      buttonText="Sign In"
      isPending={isPending}
      style={{
        form: {
          bgColor: "darker"
        }
      }}
    >
      <Input
        name="email"
        labelText="Email"
        register={register}
        error={errors.email}
      />
      <Input
        type="password"
        name="password"
        labelText="Password"
        register={register}
        error={errors.password}
      />
    </Form>
  );
};
