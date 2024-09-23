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
          // TODO: conditionally check if isPending and set disabled state
          bg: "bg-green-700 hover:bg-opacity-90"
        }
      }}
      classList={{
        formClassName: "pb-12",
        buttonClassName: "mt-6"
      }}
    >
      <Input
        name="email"
        label="Email"
        register={register}
        error={formErrors.email}
        classList={{
          inputClassName: "h-12 md:h-auto"
        }}
        style={{
          wrapper: {
            flex: "col",
            gap: "sm"
          },
          input: {
            width: "full"
          }
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
        style={{
          wrapper: {
            flex: "col",
            gap: "sm"
          },
          input: {
            width: "full"
          }
        }}
      />
    </Form>
  );
};
