import { FC } from "react";
import { FieldError, FieldValues, UseFormRegister } from "react-hook-form";
import { utilityHooks } from "@/shared/hooks";
import { PiWarningCircleDuotone } from "react-icons/pi";
import { IStyles } from "@/tw-styled/Styles";
import { useClassNames } from "@/tw-styled";
import { FormFieldError } from "../wrappers";
import { styleHooks } from "@/tw-styled/hooks";
import { useIcons } from "@/tw-styled/hooks/useIcons";

type InputProps<T extends FieldValues> = InputStyleProps & {
  name: keyof T;
  label?: string;
  register?: UseFormRegister<T>;
  error?: FieldError;
  type?: "text" | "password";
  is_label_hidden?: boolean;
  is_error_hidden?: boolean;
  is_error_icon_hidden?: boolean;
};

export type InputStyleProps = {
  style?: {
    wrapper?: IStyles;
    label?: IStyles;
    inputWrapper?: IStyles;
    input?: IStyles;
    errorIcon?: IStyles;
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

  const icons = useIcons(["error"]);
  const styles = styleHooks.useDefaultInput({ is_error, style });
  const classes = useClassNames({ ...styles });

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

  const FieldError = error && (
    <FormFieldError
      message={error.message}
      described_by={name}
      is_error_hidden={is_error_hidden}
    >
      {error.message}
    </FormFieldError>
  );

  return (
    <div className={classes.wrapper}>
      {Label}
      {InputWrapper}
      {FieldError}
    </div>
  );
};
