import { useStyleResolver } from "@/tw-styled/tools";
import { BaseStyleProps } from "@/tw-styled/types";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { defaultStyles } from "./FormField.defaultStyles";
import { useFormFieldUi } from "./FormField.ui";

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
    parentWrapper?: BaseStyleProps;
    label?: BaseStyleProps;
    input?: BaseStyleProps;
    fieldError?: BaseStyleProps;
    labelInputWrapper?: BaseStyleProps;
    errorIcon?: BaseStyleProps;
    errorInputWrapper?: BaseStyleProps;
  };
};

export const FormField = <T extends FieldValues>(props: FormFieldProps<T>) => {
  const { style, ...rest } = props;

  const classes = useStyleResolver({ ...defaultStyles(style) });
  const FormField = useFormFieldUi({ classes, ...rest });

  return FormField;
};
