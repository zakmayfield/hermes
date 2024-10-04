import { formHooks } from "@/shared/hooks";

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
        labelText="Email"
        register={register}
        error={formErrors.email}
      />

      <Input
        name="password"
        labelText="Password"
        register={register}
        error={formErrors.password}
        type="password"
      />
    </Form>
  );
};
