"use client";
import React from "react";
import { useClassNameResolver } from "@/ui";
import { FormProps } from "./Form.types";

export const Form = (props: FormProps) => {
  const { children, submitHandler, style, options } = props;
  const classes = useClassNameResolver({
    form: {
      display: "flex-col",
      gap: "md",
      borderRadius: "lg",
      ...style?.form
    },
    title: { ...style?.title }
  });

  return (
    <form
      onSubmit={submitHandler}
      className={classes.get("form")}
    >
      {options?.title &&
        React.createElement(
          options?.heading || "h3",
          {
            className: classes.get("title")
          },
          options.title
        )}

      {children}
    </form>
  );
};
