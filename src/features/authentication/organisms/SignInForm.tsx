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
        error={errors.email}
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
        type="password"
        name="password"
        label="Password"
        register={register}
        error={errors.password}
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
