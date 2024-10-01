import { FC } from "react";
import { useStyleResolver, useStyles, useIcons } from "@/tw-styled";
import {
  FieldError as FieldErrorType,
  FieldValues,
  UseFormRegister
} from "react-hook-form";
import { utilityHooks } from "@/shared/hooks";
import { FieldError } from "../wrappers";
import { StyleProps } from "@/tw-styled/types";

type InputProps<T extends FieldValues> = InputStyleProps & {
  name: keyof T;
  register?: UseFormRegister<T>;
  label?: string;
  error?: FieldErrorType;
  type?: "text" | "password";
  is_label_hidden?: boolean;
  is_error_hidden?: boolean;
  is_error_icon_hidden?: boolean;
};

export type InputStyleProps = {
  style?: {
    parentWrapper?: StyleProps;
    label?: StyleProps;
    inputWrapper?: StyleProps;
    input?: StyleProps;
    errorIcon?: StyleProps;
  };
};

export const Input: FC<InputProps<any>> = (props) => {
  const {
    type = "text",
    label,
    register,
    error,
    is_label_hidden = false,
    is_error_hidden = false,
    is_error_icon_hidden = false,
    style
  } = props;
  const is_error = !!error;

  const icons = useIcons({
    names: ["error"]
  });

  const styles = useStyles({
    key: "input",
    options: {
      input: {
        is_error
      }
    }
  });
  const classes = useStyleResolver({ ...styles });

  const name = props.name as string;

  const { Tooltip } = utilityHooks.useTooltip({
    content: error?.message,
    anchorSelect: `#${name}_error_icon`,
    place: "top-end",
    variant: "error"
  });

  const Label = (
    <label
      className={classes.label}
      htmlFor={name}
      hidden={is_label_hidden}
    >
      {label}
    </label>
  );

  const InputWrapper = (
    <div className={classes.inputWrapper}>
      <input
        // TODO: classes are not being added to input
        className={classes.input}
        type={type}
        placeholder={label}
        aria-label={name}
        aria-invalid={!!error}
        {...register?.(name)}
      />

      {error && !is_error_icon_hidden && (
        <icons.error
          id={`${name}_error_icon`}
          className={classes.errorIcon}
        />
      )}

      {error && !is_error_icon_hidden && <Tooltip />}
    </div>
  );

  const Error = error && (
    <FieldError
      message={error.message}
      described_by={name}
      is_error_hidden={is_error_hidden}
    />
  );

  return (
    <div className={classes.parentWrapper}>
      {Label}
      {InputWrapper}
      {Error}
    </div>
  );
};
