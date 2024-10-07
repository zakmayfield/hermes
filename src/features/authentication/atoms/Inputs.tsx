import { validators } from "@/shared/validators";
import { useFormContext } from "react-hook-form";

export const SignInInputs = () => {
  const { defaultValues } = validators.getSignInFormValidator();
  const methods = useFormContext<typeof defaultValues>();

  return (
    <div className="flex flex-col gap-4">
      <input {...methods.register("email")} />
      <input {...methods.register("password")} />
    </div>
  );
};
