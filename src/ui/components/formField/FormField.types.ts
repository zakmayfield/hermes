import { BaseStyles } from "@/ui/types";
import { FieldValues, UseFormRegister } from "react-hook-form";

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
