"use client";
import React from "react";
import { useClassNameResolver } from "@/ui";
import { TextProps } from "./Text.types";

export const Text = (props: TextProps) => {
  const { style, as = "p", children, described_by, is_hidden } = props;

  const classes = useClassNameResolver({
    parentWrapper: {
      ...style
    }
  });

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
