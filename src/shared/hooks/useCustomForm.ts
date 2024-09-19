import { DefaultValues, FieldValues, Resolver, SubmitHandler, useForm } from "react-hook-form";

export type UseCustomFormParams<T extends FieldValues> = {
  defaultValues: DefaultValues<T>;
  resolver: Resolver<T>;
};

export const useCustomForm = <T extends FieldValues>({
  defaultValues,
  resolver
}: UseCustomFormParams<T>) => {
  const { register, handleSubmit, getValues, reset, formState } = useForm({
    defaultValues,
    resolver
  });

  const handleReset = () => reset(defaultValues);

  return { register, handleSubmit, getValues, handleReset, formState };
};
