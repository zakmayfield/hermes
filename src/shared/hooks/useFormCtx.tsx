"use client";
import { UseMutateFunction } from "@tanstack/react-query";
import { DefaultValues, FieldValues, Resolver, useForm } from "react-hook-form";

type UseFormCtxProps<FormData extends FieldValues, Response> = {
  defaultValues: DefaultValues<FormData>;
  resolver: Resolver<FormData>;
  mutate?: UseMutateFunction<Response, Error, FormData, unknown>;
};

export const useFormCtx = <FormData extends FieldValues, Response>(
  props: UseFormCtxProps<FormData, Response>
) => {
  const { defaultValues, resolver, mutate } = props;

  const methods = useForm({
    defaultValues: { ...defaultValues },
    resolver
  });

  // evoke mutation
  const onSubmit = (data: FieldValues) => mutate?.(data as FormData);
  const submitHandler = methods.handleSubmit(onSubmit);

  return {
    submitHandler,
    methods
  };
};
