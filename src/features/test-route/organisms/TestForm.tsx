import { Form, Input } from "@/shared/components/form";
import { customHooks } from "@/shared/hooks";
import { validators } from "@/shared/validators";

export const TestForm = () => {
  const { resolver, defaultValues } = validators.getTestFormValidator();
  type TestFormData = typeof defaultValues;
  type TestFormResponse = { status: "success" | "error" };

  const { mutate: TestMutation } = customHooks.useCustomMutation<
    TestFormResponse,
    TestFormData
  >({
    mutationFn: async () => {
      return {
        status: "success"
      };
    },
    handleError(error, variables) {
      console.log({ error, variables });
    },
    handleSuccess(data, variables) {
      console.log({ data, variables });
    }
  });

  const { register, onSubmit } = customHooks.useCustomForm<TestFormData>({
    resolver,
    defaultValues,
    mutation: TestMutation
  });

  return (
    <Form
      onSubmit={onSubmit}
      title="Test Form"
      classList={{
        formClassName: "rounded-md bg-slate-900 py-12"
      }}
      style={{ width: "sm" }}
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
