import { formHooks } from "@/shared/hooks";
import { Form, Input } from "@/tw-styled/components";
import { useStyleMaps } from "@/tw-styled/style-resolver/hooks";
import { useEffect } from "react";

export const SignInForm = () => {
  const { register, onSubmit, errors, isPending } = formHooks.useSignInForm();

  const { getAllStyleMaps, getStyleMapGroup, getStyleMapGroups, getStyleMapFromGroup } =
    useStyleMaps();

  useEffect(() => {
    const result1 = getAllStyleMaps();
    console.log({ result1 });
  }, []);
  useEffect(() => {
    const result2 = getStyleMapGroup("layout");
    console.log({ result2 });
  }, []);
  useEffect(() => {
    const result3 = getStyleMapGroups(["margin", "margin"]);
    console.log({ result3 });
  }, []);
  useEffect(() => {
    const result4 = getStyleMapFromGroup("margin", "marginBottom");
    console.log({ result4 });
  }, []);

  return (
    <Form
      onSubmit={onSubmit}
      title="Sign In"
      buttonText="Sign In"
      isPending={isPending}
      style={{
        form: {
          bg: "bg-slate-900"
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
