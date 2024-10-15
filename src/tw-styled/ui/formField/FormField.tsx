import { useStyleToClass } from "@/tw-styled/tools";
import { BaseStyles } from "@/tw-styled/types";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { defaultStyles } from "./FormField.defaultStyles";
import { useFormFieldUi } from "./FormField.ui";
import { useDefaultStyles } from "../hooks";

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
    parentWrapper?: BaseStyles;
    label?: BaseStyles;
    input?: BaseStyles;
    fieldError?: BaseStyles;
    labelInputWrapper?: BaseStyles;
    errorIcon?: BaseStyles;
    errorInputWrapper?: BaseStyles;
  };
};

export const FormField = <T extends FieldValues>(props: FormFieldProps<T>) => {
  const { style, ...rest } = props;

  const styles = useDefaultStyles(style, defaultStyles);
  const classes = useStyleToClass(styles);
  const FormField = useFormFieldUi({ classes, ...rest });

  return FormField;
};
