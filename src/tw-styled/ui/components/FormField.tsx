import { useStyleResolver } from "@/tw-styled/tools";
import { DefaultStyleProps } from "@/tw-styled/types";
import { uiHooks } from "../hooks";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { defaultStyles } from "./FormField.defaultStyles";

export type FormFieldProps<T extends FieldValues> = {
  inputType?: "text" | "password";
  name?: keyof T;
  labelText?: string;
  errorMessage?: string;
  register?: UseFormRegister<T>;
  hiddenElements?: {
    label_hidden?: boolean;
    error_hidden?: boolean;
    error_icon_hidden?: boolean;
  };
  style?: {
    parentWrapper?: DefaultStyleProps;
    label?: DefaultStyleProps;
    input?: DefaultStyleProps;
    fieldError?: DefaultStyleProps;
    labelInputWrapper?: DefaultStyleProps;
    errorIcon?: DefaultStyleProps;
    errorInputWrapper?: DefaultStyleProps;
  };
};

export const FormField = <T extends FieldValues>(props: FormFieldProps<T>) => {
  const { style, ...rest } = props;

  const classes = useStyleResolver({ ...defaultStyles(style) });

  const { FormField } = uiHooks.useFormFieldUi({ classes, ...rest });

  return <FormField />;
};
