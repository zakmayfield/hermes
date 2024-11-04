"use client";
import React from "react";
import { useStyleToClass } from "@/tw-styled/style-to-class-resolver";
import { FormProps } from "./Form.types";

export const Form = (props: FormProps) => {
  const { children, submitHandler, style, options } = props;
  const styles = { form: { ...style?.form }, title: { ...style?.title } };
  const classes = useStyleToClass(styles);

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
