import { FC, useMemo } from "react";
import { Flex, Text } from "../containers";
import { merge } from "@/utils/ui";
import { FieldError, FieldValues, UseFormRegister } from "react-hook-form";
import { FormFieldError } from "./FieldError";

interface InputProps<T extends FieldValues> {
  name: keyof T;
  label?: string;
  register?: UseFormRegister<T>;
  error?: FieldError;
  classList?: {
    containerClassName?: string;
    labelClassName?: string;
    inputClassName?: string;
  };
  style?: {
    is_label_hidden?: boolean;
    is_error_hidden?: boolean;
    flex?: "row" | "col";
    position?: "left" | "center" | "right";
    width?: "full";
  };
}

export const Input: FC<InputProps<any>> = (props) => {
  const { label, register, error, style, classList } = props;
  const {
    is_label_hidden = false,
    is_error_hidden = false,
    flex = "col",
    position = "left"
  } = style || {};
  const name = props.name as string;

  const classes = useMemo(() => {
    const {
      containerClassName = "",
      labelClassName = "",
      inputClassName = ""
    } = classList || {};
    const { width = "full" } = style || {};

    const width_map = {
      content: "",
      full: "w-full"
    };

    return {
      container: merge(`
        ${width_map[width]}
        ${containerClassName}
      `),
      label: merge(`${labelClassName}`),
      input: merge(`
        w-full 
        ${inputClassName}
      `)
    };
  }, [classList, style]);

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

      <input
        className={classes.input}
        type="text"
        placeholder={label}
        aria-label={name}
        aria-invalid={!!error}
        {...register?.(name)}
      />

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
