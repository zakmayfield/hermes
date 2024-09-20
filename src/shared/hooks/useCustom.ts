"use client";
import { FormEvent } from "react";
import { useForm, DefaultValues, FieldValues, Resolver } from "react-hook-form";
import { MutationFunction, useMutation } from "@tanstack/react-query";
import { UseMutateFunction } from "@tanstack/react-query";

export type UseCustomMutationParams<T, V> = {
  mutationFn: MutationFunction<T, V>;
  handleSuccess?(data: T, variables?: V): void;
  handleError?(error: Error, variables?: V): void;
};

export type UseCustomFormParams<T extends FieldValues> = {
  defaultValues: DefaultValues<T>;
  resolver: Resolver<T>;
  mutation?: UseMutateFunction<unknown, Error, T, unknown>;
};

export const customHooks = {
  useCustomMutation: <T, V>(props: UseCustomMutationParams<T, V>) => {
    const { mutationFn, handleSuccess, handleError } = props;

    const { mutate, error, data } = useMutation<T, Error, V, unknown>({
      mutationFn,
      onSuccess(data, variables) {
        handleSuccess?.(data, variables);
      },
      onError(error, variables) {
        handleError?.(error, variables);
      }
    });

    return { mutate, error, data };
  },

  useCustomForm: <T extends FieldValues>(props: UseCustomFormParams<T>) => {
    const { defaultValues, resolver, mutation } = props;

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
  }
};
