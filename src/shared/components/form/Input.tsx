import { FC } from "react";
import { Flex } from "../containers";
import { FieldError, FieldValues, UseFormRegister } from "react-hook-form";
import { FormFieldError } from "./FieldError";
import { classHooks } from "@/shared/hooks";
import { PiWarningCircleDuotone } from "react-icons/pi";

export type InputStyleProps = {
  classList?: {
    containerClassName?: string;
    labelClassName?: string;
    inputClassName?: string;
  };
  style?: {
    is_label_hidden?: boolean;
    is_error_hidden?: boolean;
    is_error_icon_hidden?: boolean;
    flex?: "row" | "col";
    position?: "left" | "center" | "right";
    width?: "full";
  };
};

type InputProps<T extends FieldValues> = InputStyleProps & {
  name: keyof T;
  label?: string;
  register?: UseFormRegister<T>;
  error?: FieldError;
};

export const Input: FC<InputProps<any>> = (props) => {
  const { label, register, error, style } = props;

  const {
    is_label_hidden = false,
    is_error_hidden = false,
    is_error_icon_hidden = false,
    flex = "col",
    position = "left"
  } = style || {};

  const classes = classHooks.useInputClasses({ ...props });

  const name = props.name as string;

  return (
    <Flex
      className={classes.container}
      style={{
        dir: flex,
        position: position
      }}
    >
      <label
        className={classes.label}
        htmlFor={name}
        hidden={is_label_hidden}
      >
        {label}
      </label>

      <Flex className="relative">
        <input
          className={`${classes.input} ${(error && "ring-4 ring-red-400") || ""}`}
          type="text"
          placeholder={label}
          aria-label={name}
          aria-invalid={!!error}
          {...register?.(name)}
        />

        {error && !is_error_icon_hidden && (
          <PiWarningCircleDuotone className="absolute right-3 text-red-500 text-xl" />
        )}
      </Flex>

      {error && (
        <FormFieldError
          message={error.message}
          described_by={name}
          is_error_hidden={is_error_hidden}
        >
          {error.message}
        </FormFieldError>
      )}
    </Flex>
  );
};
