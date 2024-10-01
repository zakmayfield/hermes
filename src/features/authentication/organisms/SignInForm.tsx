import { formHooks } from "@/shared/hooks";
import { Form, Input, Layout, Text, Wrapper } from "@/tw-styled/components";

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
      <Text
        style={{
          parentWrapper: { border: "sm", padding: "sm", rounded: "lg", width: "sm" }
        }}
      >
        Hello World
      </Text>
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
