import { FC } from "react";
import { Wrapper } from "../containers";
import { FieldError, FieldValues, UseFormRegister } from "react-hook-form";
import { FormFieldError } from "./FieldError";
import { classHooks, utilityHooks } from "@/shared/hooks";
import { PiWarningCircleDuotone } from "react-icons/pi";
import { IBaseStyles, IFlexStyles, IOtherStyles } from "@/types/Styles";

export type InputStyleProps = {
  classList?: {
    wrapperClassName?: string;
    labelClassName?: string;
    inputClassName?: string;
  };
  style?: {
    wrapper?: IBaseStyles & IFlexStyles & IOtherStyles;
    label?: IBaseStyles & IFlexStyles & IOtherStyles;
    input?: IBaseStyles & IFlexStyles & IOtherStyles;
  };
};

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

export const Input: FC<InputProps<any>> = (props) => {
  const {
    type = "text",
    label,
    register,
    error,
    style,
    is_label_hidden = false,
    is_error_hidden = false,
    is_error_icon_hidden = false
  } = props;

  const name = props.name as string;

  const classes = classHooks.useInputClasses({ ...props });

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
        style={{ flex: "row" }}
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
