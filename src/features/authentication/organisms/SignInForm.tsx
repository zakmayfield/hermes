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
      style={{
        form: {
          bg: "bg-slate-900",
          rounded: "lg",
          width: "md",
          padding: "lg"
        },
        heading: {
          marginY: "md"
        },
        button: {
          buttonBgColor: "green"
        }
      }}
      classList={{
        formClassName: "pb-12"
      }}
    >
      <Input
        name="email"
        label="Email"
        register={register}
        error={errors.email}
        classList={{
          inputClassName: "h-12 md:h-auto"
        }}
      />
      <Input
        type="password"
        name="password"
        label="Password"
        register={register}
        error={errors.password}
        classList={{
          inputClassName: "h-12 md:h-auto"
        }}
      />
    </Form>
  );
};
