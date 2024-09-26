import { formHooks } from "@/shared/hooks";
import { Form, Input } from "@/tw-styled/components";

export const SignInForm = () => {
  const { register, onSubmit, errors, isPending } = formHooks.useSignInForm();

  const group = (
    <div>
      {" "}
      <p>one</p>
      <p>two</p>
    </div>
  );
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
      <div className="h-56 border flex flex-col justify-evenly">
        <p>content 1</p>
        <p>content 2</p>
      </div>

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
