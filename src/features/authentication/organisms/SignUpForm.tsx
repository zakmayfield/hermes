import { formHooks } from "@/shared/hooks";
import { Form, Input } from "@/tw-styled/components";

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
        }
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
          },
          input: {
            width: "full",
            className: "h-12 md:h-auto"
          }
        }}
      />

      <Input
        name="password"
        label="Password"
        register={register}
        error={formErrors.password}
        type="password"
        style={{
          wrapper: {
            flex: "col",
            gap: "sm"
          },
          input: {
            width: "full",
            className: "h-12 md:h-auto"
          }
        }}
      />
    </Form>
  );
};
