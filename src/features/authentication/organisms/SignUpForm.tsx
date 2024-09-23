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
        error={formErrors.email}
        style={{
          wrapper: {
            flex: "col",
            gap: "sm"
          }
        }}
        classList={{
          inputClassName: "h-12 md:h-auto"
        }}
      />

      <Input
        name="password"
        label="Password"
        register={register}
        error={formErrors.password}
        type="password"
        classList={{
          inputClassName: "h-12 md:h-auto"
        }}
      />
    </Form>
  );
};
