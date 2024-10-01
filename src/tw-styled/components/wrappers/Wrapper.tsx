"use client";
import React, { isValidElement, useMemo } from "react";
import { Children, StyleProps, TextElements, WrapperElements } from "@/tw-styled/types";
import { useStyleResolver, useStyles } from "@/tw-styled";

export type WrapperProps = {
  children?: Children;
  as?: WrapperElements | TextElements;
  style?: {
    parentWrapper?: StyleProps;
    childrenWrapper?: StyleProps;
    children?: StyleProps;
  };
};

export const Wrapper = (props: WrapperProps) => {
  const { as = "div", children, style } = props;

  const styles = useStyles({
    key: "wrapper",
    style
  });

  const classes = useStyleResolver({ ...styles });

  const childs = getChilds(children, classes);
  const ChildrenWrapper = <div className={classes.childrenWrapper}>{childs}</div>;
  const parent = getParent(as, ChildrenWrapper, classes);

  return parent;
};

const getParent = (
  as: WrapperElements | TextElements,
  children: Children,
  classes: Record<string, string>
) =>
  useMemo(() => {
    return React.createElement(as, { className: classes.parentWrapper }, children);
  }, [as, classes]);

const getChilds = (children: Children, classes: Record<string, string>) =>
  useMemo(() => {
    return React.Children.map(children, (child) => {
      if (isValidElement(child)) {
        return React.createElement(
          child.type,
          {
            ...child.props,
            key: child.key,
            className: classes.children
          },
          child.props.children
        );
      }
    });
  }, [classes]);
