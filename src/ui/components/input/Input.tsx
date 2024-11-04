"use client";
import React from "react";
import { useStyleToClass } from "@/tw-styled/style-to-class-resolver";
import { InputProps } from "./Input.types";

export const Input: React.FC<InputProps<any>> = (props) => {
  const { options, style } = props;
  const { register, ...rest } = options || {};

  const classes = useStyleToClass({ input: { ...style } });

  function setClassName() {
    return { className: classes.get("input") };
  }

  function setOptions() {
    return {
      ...rest,
      ...register?.(options?.name as string)
    };
  }

  switch (options?.type) {
    default:
      return React.createElement("input", {
        ...setOptions(),
        ...setClassName()
      });
    case "textarea":
      return React.createElement("textarea", {
        ...setOptions(),
        ...setClassName()
      });
  }
};
