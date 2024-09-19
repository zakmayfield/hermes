import { FormEvent, useEffect } from "react";
import { Form, Input } from "@/shared/components/form";
import { useCustomForm, useCustomMutation } from "@/shared/hooks";
import {
  TestFormData,
  TestFormResponse,
  TestFormResolver as resolver,
  defaultTestFormValues as defaultValues
} from "@/shared/validators/TestFormValidator";

export const TestForm = () => {
  const { mutate: TestMutation } = useCustomMutation<TestFormResponse, TestFormData>({
    mutationFn: async () => {
      return {
        status: "success"
      };
    },
    handleError(error, variables) {},
    handleSuccess(data, variables) {
      console.log({ data });
    }
  });

  const { register, onSubmit } = useCustomForm<TestFormData>({
    defaultValues,
    resolver,
    mutation: TestMutation
  });

  return (
    <Form
      onSubmit={onSubmit}
      className="rounded-md bg-slate-900"
      title="Test Form"
      width="sm"
    >
      <Input
        name="test_1"
        label="Test 1"
        register={register}
      />
      <Input
        name="test_2"
        label="Test 2"
        register={register}
      />
    </Form>
  );
};
