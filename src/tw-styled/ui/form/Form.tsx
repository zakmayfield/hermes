"use client";
import { useStyleToClass } from "@/tw-styled/style-to-class-resolver";
import { BaseStyles, Children, HeadingElements } from "@/tw-styled/types";
import React from "react";

type FormProps = {
  children?: Children;
  submitHandler: (e?: React.BaseSyntheticEvent) => Promise<void>;
  options?: { title?: string; heading?: HeadingElements };
  style?: {
    form?: BaseStyles;
    title?: BaseStyles;
  };
};

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
