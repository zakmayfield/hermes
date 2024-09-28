"use client";
import React from "react";
import { useClassNames } from "@/tw-styled";
import { IStyles, TextElements } from "@/tw-styled/Styles";
import { styleHooks, useStyles } from "@/tw-styled/hooks";

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

  // const styles = useStyles({
  //   key: "text",
  //   style
  // });
  const x = styleHooks.useTextStyles({ ...style });
  const classes = useClassNames({ ...x });

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
