import { Children } from "@/tw-styled/types";
import { UseMutateFunction } from "@tanstack/react-query";
import {
  DefaultValues,
  FieldValues,
  FormProvider,
  Resolver,
  useForm
} from "react-hook-form";

type UseFormCtxProps<T extends FieldValues, K> = {
  defaultValues: DefaultValues<T>;
  resolver: Resolver<T>;
  mutate?: UseMutateFunction<K, Error, T, unknown>;
};

export const useFormCtx = <T extends FieldValues, K>(props: UseFormCtxProps<T, K>) => {
  const { defaultValues, resolver, mutate } = props;

  const methods = useForm({
    defaultValues: { ...defaultValues },
    resolver
  });

  const Provider = ({ children }: { children?: Children }) => (
    <div>
      <FormProvider {...methods}>{children}</FormProvider>
    </div>
  );

  // evoke mutation
  const onSubmit = (data: FieldValues) => mutate?.(data as T);
  const submitHandler = methods.handleSubmit(onSubmit);

  return {
    FormProvider: Provider,
    submitHandler,
    methods
  };
};
