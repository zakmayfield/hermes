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
    childrenWrapper?: IStyles;
  };
};

export const Text = (props: TextProps) => {
  const { as = "p", children, described_by, is_hidden } = props;
  const classes = useClassNames({ ...props.style });

  const ChildrenWrapper = <span className={classes.childrenWrapper}>{children}</span>;

  return React.createElement(
    as,
    {
      "aria-describedby": described_by,
      hidden: is_hidden,
      className: classes.wrapper
    },
    ChildrenWrapper
  );
};
