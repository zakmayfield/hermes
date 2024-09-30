"use client";
import React from "react";
import { IStyles } from "@/tw-styled/Styles";
import { styleHooks, useClassNames } from "@/tw-styled/hooks";
import { TextElements } from "@/tw-styled/types";

export type TextProps = {
  as?: TextElements;
  children?: React.ReactNode;
  described_by?: string;
  is_hidden?: boolean;
  style?: {
    parentWrapper?: IStyles;
  };
};

export const Text = (props: TextProps) => {
  const { as = "p", children, described_by, is_hidden, style } = props;

  const styles = styleHooks.useTextStyles({ ...style });
  const classes = useClassNames(styles);

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
