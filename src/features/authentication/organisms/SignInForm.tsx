import { formHooks } from "@/shared/hooks";
import { Form, Input, Layout, Wrapper } from "@/tw-styled/components";

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
      <Wrapper
        style={{
          parentWrapper: { border: "sm", padding: "sm" },
          childrenWrapper: { border: "sm", padding: "sm" },
          children: { border: "sm", padding: "sm" }
        }}
      >
        <div>test 1</div>
        <div>test 2</div>
      </Wrapper>

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
