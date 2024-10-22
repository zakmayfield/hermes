"use client";
import React from "react";
import { useStyleToClass } from "@/tw-styled/style-to-class-resolver";
import { BaseStyles } from "@/tw-styled/types";
import { FieldValues, UseFormRegister } from "react-hook-form";

type InputType = "text" | "password" | "checkbox" | "textarea";

type InputProps<T extends FieldValues> = {
  options?: {
    name: keyof T;
    type?: InputType;
    placeholder?: string;
    register?: UseFormRegister<T>;
  };
  style?: BaseStyles;
};

export const Input: React.FC<InputProps<any>> = (props) => {
  const { options, style } = props;
  const styles = { input: { ...style } };
  const classes = useStyleToClass(styles);

  function handleCreateInput() {
    const { register, ...rest } = options || {};

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
  }

  return handleCreateInput();
};
