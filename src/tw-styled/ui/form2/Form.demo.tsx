import { BaseStyles, Styles } from "@/tw-styled/types";
import { Form2, FormField } from "@/tw-styled/ui";

type FormDemoProps = {
  title?: string;
  fieldError?: boolean;
  isPending?: boolean;
  buttonProps?: {
    text?: string;
    variant?: Styles["buttonVariant"];
    size?: Styles["buttonSize"];
  };
  style?: {
    formStyles?: BaseStyles;
    titleStyles?: BaseStyles;
    childrenWrapperStyles?: BaseStyles;
    childrenStyles?: BaseStyles;
    buttonStyles?: BaseStyles;
  };
};

const formVarsOne = {
  name: "foobar",
  labelText: "Foobar"
};
const formVarsTwo = {
  name: "dooloo",
  labelText: "Dooloo"
};

export const FormDemo = (props: FormDemoProps) => {
  const { title, buttonProps, fieldError = false, isPending = false, style } = props;

  const errorOne =
    (fieldError && { type: "required", message: `${formVarsOne.name} is required` }) ||
    undefined;

  const errorTwo =
    (fieldError && { type: "required", message: `${formVarsTwo.name} is required` }) ||
    undefined;

  return (
    <div>
      <Form2
        titleText={title}
        buttonProps={{ ...buttonProps }}
        isPending={isPending}
        style={{ ...style }}
      >
        <FormField
          name={formVarsOne.name}
          labelText={formVarsOne.labelText}
          errorMessage={errorOne?.message}
        />
        <FormField
          name={formVarsTwo.name}
          labelText={formVarsTwo.labelText}
          errorMessage={errorTwo?.message}
        />
      </Form2>
    </div>
  );
};
