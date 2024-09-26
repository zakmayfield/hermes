import { formHooks } from "@/shared/hooks";
import { Form, Input } from "@/tw-styled/components";

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
        }
      }}
    >
      <Input
        name="email"
        label="Email"
        register={register}
        error={errors.email}
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
        type="password"
        name="password"
        label="Password"
        register={register}
        error={errors.password}
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
