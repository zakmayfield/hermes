import { FC, useMemo } from "react";
import { Flex } from "../containers";
import { merge } from "@/utils/ui";
import { FieldValues, UseFormRegister } from "react-hook-form";

// type TInputProps = {
//   containerClassName?: string;
//   label?: string;
//   htmlFor?: string;
//   hiddenLabel?: boolean;
//   name?: string;

//   flex?: "row" | "col";
//   position?: "left" | "center" | "right";
//   width?: "full";
// };

interface Props<T extends FieldValues> {
  name: keyof T;
  register?: UseFormRegister<T>;
  label?: string;

  containerClassName?: string;
  hiddenLabel?: boolean;

  flex?: "row" | "col";
  position?: "left" | "center" | "right";
  width?: "full";
}

export const Input: FC<Props<any>> = (props) => {
  const {
    containerClassName,
    register,
    name,
    label,
    hiddenLabel,
    flex = "col",
    position = "left",
    width = "full"
  } = props;

  const is_hidden = !!hiddenLabel;

  const label_hidden_class = (hiddenLabel && "hidden") || "";

  const containerClassList = useMemo(() => {
    const width_map = {
      content: "",
      full: "w-full"
    };

    return merge(`
      ${width_map[width]}
      ${containerClassName}
    `);
  }, [containerClassName, width]);

  return (
    <Flex
      dir={flex}
      position={position}
      className={containerClassList}
    >
      <label
        htmlFor={name as string}
        className={`
          ${label_hidden_class}
        `}
        aria-hidden={is_hidden}
      >
        {label}
      </label>

      <input
        type="text"
        placeholder={label}
        className="w-full"
        {...register?.(name as string)}
      />
    </Flex>
  );
};
