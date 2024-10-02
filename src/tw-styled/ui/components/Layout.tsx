"use client";
import React, { isValidElement, useMemo } from "react";
import { useStyleResolver, useStyles } from "@/tw-styled";
import { Children, HeadingElements, StyleProps } from "@/tw-styled/types";

export type LayoutProps = {
  children?: Children;
  title?: string;
  headingAs?: HeadingElements;
  headingChildren?: Children;
  style?: {
    parentWrapper?: StyleProps;
    childrenWrapper?: StyleProps;
    children?: StyleProps;
    headingWrapper?: StyleProps;
    heading?: StyleProps;
    headingChildren?: StyleProps;
  };
};

export const Layout = (props: LayoutProps) => {
  const { children, title = "", headingAs = "h1", headingChildren, style } = props;

  const styles = useStyles({
    key: "layout",
    style
  });
  const classes = useStyleResolver({ ...styles });

  const heading =
    (title && getHeading(title, headingAs, headingChildren, classes)) || null;
  const childs = getChildren(children, classes);

  return (
    <div className={classes.parentWrapper}>
      {heading}
      {childs}
    </div>
  );
};

const getHeading = (
  title: string,
  headingAs: HeadingElements,
  headingChildren: Children,
  classes: Record<string, string>
) => {
  const HeadingChilds = useMemo(() => {
    return React.Children.map(headingChildren, (child) => {
      if (isValidElement(child)) {
        return React.createElement(
          child.type,
          { ...child.props, key: child.key, className: classes.headingChildren },
          child.props.children
        );
      }
    });
  }, [classes]);

  const HeadingElement = useMemo(() => {
    return React.createElement(headingAs, { className: classes.heading }, title);
  }, [title, classes]);

  return (
    <div className={classes.headingWrapper}>
      {HeadingElement}
      {HeadingChilds}
    </div>
  );
};

const getChildren = (children: Children, classes: Record<string, string>) => {
  const childs = useMemo(() => {
    return (
      React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.createElement(
            child.type,
            { ...child.props, key: child.props.key, className: classes.children },
            child.props.children
          );
        }

        return null;
      }) || null
    );
  }, [children, classes]);

  return <div className={classes.childrenWrapper}>{childs}</div>;
};
