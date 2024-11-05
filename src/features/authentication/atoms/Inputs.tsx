"use client";
import { validators } from "@/shared/validators";
import { FieldError, Input, Label, Stack } from "@/ui/components";
import { useFormContext } from "react-hook-form";

export const AuthInputs = () => {
  const { defaultValues } = validators.authValidator();

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
