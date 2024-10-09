"use client";
import { validators } from "@/shared/validators";
import { FormField } from "@/tw-styled/ui";
import { useFormContext } from "react-hook-form";

export const SignInInputs = () => {
  const { defaultValues } = validators.getSignInFormValidator();

  const {
    register,
    formState: { errors }
  } = useFormContext<typeof defaultValues>();

  return (
    <div className="flex flex-col gap-4">
      <FormField
        name={"email"}
        labelText={"Email"}
        errorMessage={errors.email?.message}
        register={register}
      />
      <FormField
        inputType={"password"}
        name={"password"}
        labelText={"Password"}
        errorMessage={errors.password?.message}
        register={register}
      />
    </div>
  );
};
