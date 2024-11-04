"use client";
import { Children, TextElements, BaseStyles } from "@/tw-styled/types";
import { useStyleToClass } from "@/tw-styled/tools";
import React from "react";

export type TextProps = {
  as?: TextElements;
  children?: Children;
  described_by?: string;
  is_hidden?: boolean;
  style?: {
    parentWrapper?: BaseStyles;
  };
};

export const Text = (props: TextProps) => {
  const { style, as = "p", children, described_by, is_hidden } = props;

  const styles = {
    parentWrapper: {
      ...style?.parentWrapper
    }
  } satisfies TextProps["style"];

  const classes = useStyleToClass(styles);

  const Text = React.useMemo(() => {
    return React.createElement(
      as,
      {
        "aria-describedby": described_by,
        hidden: is_hidden,
        className: classes.get("parentWrapper")
      },
      children
    );
  }, [as, children, described_by, is_hidden, classes]);

  return Text;
};
