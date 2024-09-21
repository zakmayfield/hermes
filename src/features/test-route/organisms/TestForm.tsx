import { Form, Input } from "@/shared/components/form";
import { formHooks } from "@/shared/hooks";

export const TestForm = () => {
  const { register, onSubmit, formErrors } = formHooks.useTestForm();

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
        error={formErrors.test_1}
        style={{
          is_error_hidden: true,
          is_label_hidden: true
        }}
      />
      <Input
        name="test_2"
        label="Test 2"
        register={register}
        error={formErrors.test_2}
      />
    </Form>
  );
};
