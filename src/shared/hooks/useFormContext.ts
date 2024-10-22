"use client";
import { UseMutateFunction } from "@tanstack/react-query";
import { DefaultValues, FieldValues, Resolver, useForm } from "react-hook-form";

type UseFormContextProps<T extends FieldValues, R> = {
  defaultValues: DefaultValues<T>;
  resolver: Resolver<T>;
  mutate: UseMutateFunction<R, Error, T, unknown>;
};
export const useFormContext = <FormData extends FieldValues, Response>(
  props: UseFormContextProps<FormData, Response>
) => {
  const { defaultValues, resolver, mutate } = props;

  const methods = useForm<FormData, Response>({
    defaultValues: { ...defaultValues },
    resolver
  });

  const onSubmit = (data: FieldValues) => {
    mutate(data as FormData);
    methods.reset();
  };

  const submitHandler = methods.handleSubmit(onSubmit);

  return { methods, submitHandler };
};
