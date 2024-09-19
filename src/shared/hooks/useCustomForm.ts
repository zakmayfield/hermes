import { UseMutateFunction } from "@tanstack/react-query";
import { FormEvent } from "react";
import { DefaultValues, FieldValues, Resolver, SubmitHandler, useForm } from "react-hook-form";

export type UseCustomFormParams<T extends FieldValues> = {
  defaultValues: DefaultValues<T>;
  resolver: Resolver<T>;
  mutation?: UseMutateFunction<unknown, Error, T, unknown>;
};

export const useCustomForm = <T extends FieldValues>({
  defaultValues,
  resolver,
  mutation
}: UseCustomFormParams<T>) => {
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues,
    resolver
  });

  const handleReset = () => reset(defaultValues);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = getValues();
    handleSubmit(() => mutation?.(data))();
  };

  return { register, onSubmit, handleReset, formState };
};
