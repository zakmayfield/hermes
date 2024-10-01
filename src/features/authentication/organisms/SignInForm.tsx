import { formHooks } from "@/shared/hooks";
import { useStyleResolver } from "@/tw-styled";
import { Form, Input } from "@/tw-styled/components";
import { ComponentStyleProp } from "@/tw-styled/types";

export const SignInForm = () => {
  const { register, onSubmit, errors, isPending } = formHooks.useSignInForm();

  const styles: ComponentStyleProp = {
    foo: { width: "full", height: "lg", border: "sm", className: "border" },
    bar: { animate: "pulse" },
    doo: {}
  };

  const classes = useStyleResolver({ ...styles });

  console.log({ classes });

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
