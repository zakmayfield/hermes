import { FC } from "react";
import {
  FieldError as FieldErrorType,
  FieldValues,
  UseFormRegister
} from "react-hook-form";
import { StyleProps } from "@/tw-styled/types";
import { useStyleResolver } from "@/tw-styled/tools";
import { styleHooks, uiHooks } from "../hooks";

export type InputProps<T extends FieldValues> = InputStyleProps & {
  register?: UseFormRegister<T>;
  name: keyof T;
  labelText?: string;
  error?: FieldErrorType;
  type?: "text" | "password";
  is_label_hidden?: boolean;
  is_error_hidden?: boolean;
  is_error_icon_hidden?: boolean;
};

export type InputStyleProps = {
  style?: {
    parentWrapperStyles?: StyleProps;
    labelStyles?: StyleProps;
    inputWrapperStyles?: StyleProps;
    inputStyles?: StyleProps;
    errorIconStyles?: StyleProps;
  };
};

export const Input: FC<InputProps<any>> = (props) => {
  const { style, ...rest } = props;

  const styles = styleHooks.useInputStyles({
    style,
    options: { input: { is_error: !!rest.error } }
  });
  const classes = useStyleResolver({ ...styles });
  const { Input } = uiHooks.useInputUi({ classes, ...rest });

  return <Input />;
};
