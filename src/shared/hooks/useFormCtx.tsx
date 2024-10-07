import { Children } from "@/tw-styled/types";
import {
  DefaultValues,
  FieldValues,
  FormProvider,
  Resolver,
  useForm
} from "react-hook-form";

type UseFormCtxProps<T extends FieldValues> = {
  defaultValues: DefaultValues<T>;
  resolver: Resolver<T>;
};
export const useFormCtx = <T extends FieldValues>(props: UseFormCtxProps<T>) => {
  const { defaultValues, resolver } = props;

  const methods = useForm({
    defaultValues: { ...defaultValues },
    resolver
  });

  const Provider = ({ children }: { children?: Children }) => (
    <div>
      <FormProvider {...methods}>{children}</FormProvider>
    </div>
  );

  const onSubmit = (data: FieldValues) => console.log(data);
  const submitHandler = methods.handleSubmit(onSubmit);

  return {
    FormProvider: Provider,
    submitHandler,
    methods
  };
};
