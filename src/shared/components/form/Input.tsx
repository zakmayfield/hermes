import { FC, useMemo } from "react";
import { Flex } from "../containers";
import { merge } from "@/utils/ui";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps<T extends FieldValues> {
  name: keyof T;
  label?: string;
  register?: UseFormRegister<T>;
  classList?: {
    containerClassName?: string;
    labelClassName?: string;
    inputClassName?: string;
  };
  style?: {
    is_hidden_label?: boolean;
    flex?: "row" | "col";
    position?: "left" | "center" | "right";
    width?: "full";
  };
}

export const Input: FC<InputProps<any>> = (props) => {
  const { label, register, style, classList } = props;
  const { is_hidden_label = false, flex = "col", position = "left" } = style || {};
  const name = props.name as string;

  const classes = useMemo(() => {
    const { containerClassName, labelClassName, inputClassName } = classList || {};
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
      dir={flex}
      position={position}
    >
      <label
        className={classes.label}
        htmlFor={name}
        hidden={is_hidden_label}
      >
        {label}
      </label>

      <input
        className={classes.input}
        type="text"
        placeholder={label}
        aria-label={name}
        {...register?.(name)}
      />
    </Flex>
  );
};
