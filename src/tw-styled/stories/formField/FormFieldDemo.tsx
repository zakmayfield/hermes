import { FormField } from "@/tw-styled/ui";

type FormFieldDemoProps = {
  errorMessage?: boolean;
};

export const FormFieldDemo = (props: FormFieldDemoProps) => {
  const fieldKeys = ["test_1", "test_2"];
  const meta = {
    test_1: {
      errorMessage: props.errorMessage ? "foobar" : ""
    },
    test_2: {
      errorMessage: props.errorMessage ? "foobaz" : ""
    }
  };

  return (
    <div className="demo space-y-6 max-w-sm">
      {fieldKeys.map((key) => (
        <FormField
          name={key}
          labelText={key}
          errorMessage={meta[key as keyof typeof meta].errorMessage}
        />
      ))}
    </div>
  );
};
