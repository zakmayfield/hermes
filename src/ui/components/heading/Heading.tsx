"use client";
import React from "react";
import { useClassNameResolver } from "@/ui";
import { HeadingProps } from "./Heading.types";

export const Heading = (props: HeadingProps) => {
  const { style, as = "h1", text = "", children } = props;

  const classes = useClassNameResolver({
    heading: {
      ...style
    }
  });

  return React.useMemo(() => {
    return React.createElement(as, { className: classes.get("heading") }, text);
  }, [as, text, classes]);
};
