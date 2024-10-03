import { useStyleResolver } from "../tools";
import { BtnVariants, StyleProps } from "../types";
import { Form, FormProps, Input } from "../ui";
import { styleHooks } from "../ui/hooks";

type FormDemoProps = {
  title?: string;
  fieldError?: boolean;
  isPending?: boolean;
  button?: {
    buttonText?: string;
    buttonVariant?: BtnVariants;
    buttonWidth?: "sm" | "md" | "lg" | "full" | "none";
  };
  style?: {
    formStyles?: StyleProps;
    titleStyles?: StyleProps;
    childrenWrapperStyles?: StyleProps;
    childrenStyles?: StyleProps;
    buttonStyles?: StyleProps;
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
  const {
    title,
    button: { buttonText, buttonWidth, buttonVariant } = {},
    fieldError = false,
    isPending = false,
    style
  } = props;

  const errorOne =
    (fieldError && { type: "required", message: `${formVarsOne.name} is required` }) ||
    undefined;

  const errorTwo =
    (fieldError && { type: "required", message: `${formVarsTwo.name} is required` }) ||
    undefined;

  return (
    <div>
      <Form
        titleText={title}
        button={{ buttonText, buttonWidth, buttonVariant }}
        isPending={isPending}
        style={{ ...style }}
      >
        <Input
          name={formVarsOne.name}
          labelText={formVarsOne.labelText}
          error={errorOne}
        />
        <Input
          name={formVarsTwo.name}
          labelText={formVarsTwo.labelText}
          error={errorTwo}
        />
      </Form>
    </div>
  );
};
