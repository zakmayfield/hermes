import { MutationFunction, useMutation } from "@tanstack/react-query";

export type UseCustomMutationParams<T, V> = {
  mutationFn: MutationFunction<T, V>;
  handleSuccess?(data: T, variables?: V): void;
  handleError?(error: Error, variables?: V): void;
};

export const useCustomMutation = <T, V>({
  mutationFn,
  handleSuccess,
  handleError
}: UseCustomMutationParams<T, V>) => {
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
};
