import { useMemo } from "react";
import { Flex } from "../containers";
import { merge } from "@/utils/ui";

type TInputProps = {
  containerClassName?: string;
  label?: string;
  htmlFor?: string;
  hiddenLabel?: boolean;
  name?: string;
  flex?: "row" | "col";
  position?: "left" | "center" | "right";
  width?: "full";
};

export const Input = (props: TInputProps) => {
  const {
    containerClassName,
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
        htmlFor={name}
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
      />
    </Flex>
  );
};
