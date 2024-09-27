"use client";
import React from "react";
import { useClassNames } from "@/tw-styled";
import { IStyles } from "@/tw-styled/Styles";

type TextProps = {
  as?: "p" | "span";
  children?: React.ReactNode;
  described_by?: string;
  is_hidden?: boolean;
  style?: {
    wrapper: IStyles;
  };
};

export const Text = (props: TextProps) => {
  const { as = "p", children, described_by, is_hidden, style } = props;

  const styles: TextProps["style"] = {
    wrapper: {
      ...style?.wrapper
    }
  };

  const classes = useClassNames({ ...styles });

  return React.createElement(
    as,
    {
      "aria-describedby": described_by,
      hidden: is_hidden,
      className: classes.wrapper
    },
    children
  );
};
