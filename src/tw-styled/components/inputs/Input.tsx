import { FC, useCallback, useMemo } from "react";
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
    parentWrapper?: StyleProps;
    label?: StyleProps;
    inputWrapper?: StyleProps;
    input?: StyleProps;
    errorIcon?: StyleProps;
  };
};

export const Input: FC<InputProps<any>> = (props) => {
  const {
    register,
    type = "text",
    labelText = "",
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
    style,
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

  const InputWrapper = (
    <div className={classes.inputWrapper}>
      <input
        // TODO: classes are not being added to input
        className={classes.input}
        type={type}
        placeholder={labelText}
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

  const { FieldError, Label } = useInput({
    name,
    is_error_hidden,
    errorMessage: error?.message || "",
    labelText,
    is_label_hidden,
    classes
  });

  return (
    <div className={classes.parentWrapper}>
      {Label}
      {InputWrapper}
      {FieldError}
    </div>
  );
};

function useInput(props: {
  name: string;
  is_error_hidden: boolean;
  errorMessage: string;
  labelText: string;
  is_label_hidden: boolean;
  classes: Record<string, string>;
}) {
  const { name, errorMessage, is_error_hidden, labelText, is_label_hidden, classes } =
    props;

  const Error = useMemo(() => {
    return (
      <FieldError
        message={errorMessage}
        described_by={name}
        is_error_hidden={is_error_hidden}
      />
    );
  }, [errorMessage, is_error_hidden, name]);

  const Label = useMemo(() => {
    return (
      <label
        className={classes.label}
        htmlFor={name}
        hidden={is_label_hidden}
      >
        {labelText}
      </label>
    );
  }, [labelText, is_label_hidden, name, classes]);

  const components = {
    FieldError: Error,
    Label
  };

  return components;
}
