"use client";
import React from "react";
import { useClassNameResolver } from "@/ui";
import { LayoutProps } from "./Layout.types";

export const Layout = (props: LayoutProps) => {
  const { children, options, style } = props;

  const classes = useClassNameResolver({
    parentWrapper: { ...style?.parentWrapper },
    titleWrapper: { ...style?.titleWrapper },
    bodyWrapper: { ...style?.bodyWrapper }
  });

  const titleWrapper = options?.title && (
    <div className={classes.get("titleWrapper")}>{options.title}</div>
  );

  const bodyWrapper = <div className={classes.get("bodyWrapper")}>{children}</div>;

  return React.createElement(
    options?.as || "div",
    { className: classes.get("parentWrapper") },
    [titleWrapper, bodyWrapper]
  );
};
