"use client";
import { FieldError, Input, Label, Stack } from "@/ui/components";
import { useFormContext } from "react-hook-form";
import { signinValidator } from "@/utils/validators/forms/signinValidator";

export const AuthInputs = () => {
  const { defaultValues } = signinValidator;

  const {
    register,
    formState: { errors }
  } = useFormContext<typeof defaultValues>();

  return (
    <div className="flex flex-col gap-sm">
      <Stack>
        <Label options={{ text: "Email", htmlFor: "email" }} />
        <Input options={{ name: "email", id: "email", placeholder: "Email", register }} />
        <FieldError options={{ message: errors.email?.message }} />
      </Stack>

      <Stack>
        <Label options={{ text: "Password", htmlFor: "password" }} />
        <Input
          options={{
            name: "password",
            id: "password",
            placeholder: "Password",
            type: "password",
            register
          }}
        />
        <FieldError options={{ message: errors.password?.message }} />
      </Stack>
    </div>
  );
};
