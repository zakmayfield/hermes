"use client";
import { validators } from "@/shared/validators";
import { FormField } from "@/ui/components";
import { useFormContext } from "react-hook-form";

export const AuthInputs = () => {
  const { defaultValues } = validators.authValidator();

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
