"use client";
import React from "react";
import { StyleProps, TextElements } from "@/tw-styled/types";
import { useClassNameResolver, useStyles } from "@/tw-styled";

export type TextProps = {
  as?: TextElements;
  children?: React.ReactNode;
  described_by?: string;
  is_hidden?: boolean;
  style?: {
    parentWrapper?: StyleProps;
  };
};

export const Text = (props: TextProps) => {
  const { as = "p", children, described_by, is_hidden, style } = props;

  const styles = useStyles({
    key: "text",
    style
  });
  const classes = useClassNameResolver(styles);

  return React.createElement(
    as,
    {
      "aria-describedby": described_by,
      hidden: is_hidden,
      className: classes.parentWrapper
    },
    children
  );
};
