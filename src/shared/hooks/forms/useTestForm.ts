import { testFormValidator } from "@/utils/validators/formValidators";
import { useFormContext } from "./useFormContext";
import { useMutation } from "@tanstack/react-query";

export const useTestForm = () => {
  const formMeta = testFormValidator();

  type FormData = typeof formMeta.defaultValues;
  type Response = { x: string };

  const testMutation = async (formData: FormData) => {
    console.log({ formData });
    return { x: "foobar" };
  };

  const { mutate } = useMutation({
    mutationFn: testMutation,
    onSuccess(data) {
      console.log({ response: data });
    },
    onError(error) {
      console.log({ error });
    }
  });

  return useFormContext<FormData, Response>({ ...formMeta, mutate });
};
