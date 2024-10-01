import React from "react";
import { Children, HeadingElements, StyleProps } from "@/tw-styled/types";
import { useClassNameResolver, useStyles } from "@/tw-styled";

export type HeadingProps = {
  as?: HeadingElements;
  children?: Children;
  style?: {
    parentWrapper?: StyleProps;
    childrenWrapper?: StyleProps;
  };
};

export const Heading = (props: HeadingProps) => {
  const { as = "h1", children, style } = props;

  const styles = useStyles({
    key: "heading",
    style
  });
  const classes = useClassNameResolver({ ...styles });

  const ChildrenWrapper = <div className={classes.childrenWrapper}>{children}</div>;
  return React.createElement(as, { className: classes.parentWrapper }, ChildrenWrapper);
};
