"use client";
import { FormEvent } from "react";
import { useForm, DefaultValues, FieldValues, Resolver } from "react-hook-form";
import {
  MutationFunction,
  QueryFunction,
  QueryKey,
  useMutation,
  useQuery
} from "@tanstack/react-query";
import { UseMutateFunction } from "@tanstack/react-query";

export type UseCustomMutationParams<T, V> = {
  mutationFn: MutationFunction<T, V>;
  handleSuccess?(data: T, variables?: V): void;
  handleError?(error: Error, variables?: V): void;
};

export type UseCustomQueryParams<T> = {
  queryKey: QueryKey;
  queryFn: QueryFunction<T>;
  staleTime?: number;
};

export type UseCustomFormParams<R, T extends FieldValues> = {
  defaultValues: DefaultValues<T>;
  resolver?: Resolver<T>;
  mutate?: UseMutateFunction<R, Error, T, unknown>;
};

export const customHooks = {
  useCustomMutation: <T, V>(props: UseCustomMutationParams<T, V>) => {
    const { mutationFn, handleSuccess, handleError } = props;

    return useMutation<T, Error, V, unknown>({
      mutationFn,
      onSuccess(data, variables) {
        handleSuccess?.(data, variables);
      },
      onError(error, variables) {
        handleError?.(error, variables);
      }
    });
  },

  useCustomQuery: <T>(props: UseCustomQueryParams<T>) => {
    const { queryKey, queryFn, staleTime = Infinity } = props;

    return useQuery<T, Error>({
      queryKey,
      queryFn,
      staleTime
    });
  },

  useCustomForm: <R, T extends FieldValues>(props: UseCustomFormParams<R, T>) => {
    const { defaultValues, resolver, mutate } = props;

    const { register, handleSubmit, reset, getValues, formState } = useForm({
      defaultValues,
      resolver
    });

    const handleReset = () => reset(defaultValues);

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const data = getValues();
      handleSubmit(() => mutate?.(data))();
    };

    return { register, onSubmit, handleReset, formState };
  }
};
