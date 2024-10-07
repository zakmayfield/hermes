import { BtnVariants, DefaultStyleProps } from "../types";
import { Form, FormField } from "../ui";

type FormDemoProps = {
  title?: string;
  fieldError?: boolean;
  isPending?: boolean;
  buttonProps?: {
    text?: string;
    variant?: BtnVariants;
    width?: "sm" | "md" | "lg" | "full" | "none";
  };
  style?: {
    formStyles?: DefaultStyleProps;
    titleStyles?: DefaultStyleProps;
    childrenWrapperStyles?: DefaultStyleProps;
    childrenStyles?: DefaultStyleProps;
    buttonStyles?: DefaultStyleProps;
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
      <Form
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
      </Form>
    </div>
  );
};
