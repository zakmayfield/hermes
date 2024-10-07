import { validators } from "@/shared/validators";
import { FormField } from "@/tw-styled/ui";
import { useFormContext } from "react-hook-form";

export const SignInInputs = () => {
  const { defaultValues } = validators.getSignInFormValidator();
  const methods = useFormContext<typeof defaultValues>();

  return (
    <div className="flex flex-col gap-4">
      <FormField
        name={"email"}
        labelText={"Email"}
        errorMessage={methods.formState.errors.email?.message}
      />
      <FormField
        inputType={"password"}
        name={"password"}
        labelText={"Password"}
        errorMessage={methods.formState.errors.password?.message}
      />
    </div>
  );
};
