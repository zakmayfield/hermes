import { FC } from "react";
import { FieldError, FieldValues, UseFormRegister } from "react-hook-form";
import { utilityHooks } from "@/shared/hooks";
import { PiWarningCircleDuotone } from "react-icons/pi";
import { IStyles } from "@/tw-styled/Styles";
import { useClassNames } from "@/tw-styled";
import { FormFieldError, Wrapper } from "../wrappers";

type InputProps<T extends FieldValues> = {
  name: keyof T;
  label?: string;
  register?: UseFormRegister<T>;
  error?: FieldError;
  type?: "text" | "password";
  is_label_hidden?: boolean;
  is_error_hidden?: boolean;
  is_error_icon_hidden?: boolean;
  classList?: {
    wrapperClassName?: string;
    labelClassName?: string;
    inputClassName?: string;
  };
  style?: {
    wrapper?: IStyles;
    label?: IStyles;
    input?: IStyles;
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
    is_error_icon_hidden = false
  } = props;

  const name = props.name as string;

  const classes = useClassNames({ ...props.style });

  const { Tooltip } = utilityHooks.useTooltip({
    content: error?.message,
    anchorSelect: `#${name}_error_icon`,
    place: "top-end",
    variant: "error"
  });

  return (
    <Wrapper className={classes.wrapper}>
      <label
        className={classes.label}
        htmlFor={name}
        hidden={is_label_hidden}
      >
        {label}
      </label>

      <Wrapper
        style={{ wrapper: { flex: "row" } }}
        className="relative"
      >
        <input
          className={`${classes.input} ${(error && "ring-4 ring-red-400") || ""}`}
          type={type}
          placeholder={label}
          aria-label={name}
          aria-invalid={!!error}
          {...register?.(name)}
        />

        {error && !is_error_icon_hidden && (
          <PiWarningCircleDuotone
            id={`${name}_error_icon`}
            className="absolute right-3 top-[.375rem] text-red-500 text-xl"
          />
        )}

        {error && !is_error_icon_hidden && <Tooltip />}
      </Wrapper>

      {error && (
        <FormFieldError
          message={error.message}
          described_by={name}
          is_error_hidden={is_error_hidden}
        >
          {error.message}
        </FormFieldError>
      )}
    </Wrapper>
  );
};
