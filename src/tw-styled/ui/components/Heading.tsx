import React, { useMemo } from "react";
import { Children, HeadingElements, StyleProps } from "@/tw-styled/types";
import { useStyleResolver, useStyles } from "@/tw-styled";

export type HeadingProps = {
  children?: Children;
  as?: HeadingElements;
  title?: string;
  style?: {
    parentWrapper?: StyleProps;
    heading?: StyleProps;
    childrenWrapper?: StyleProps;
  };
};

export const Heading = (props: HeadingProps) => {
  const { as = "h1", title = "", children, style } = props;

  const styles = useStyles({
    key: "heading",
    style
  });
  const classes = useStyleResolver({ ...styles });

  const ChildrenWrapper =
    children &&
    useMemo(() => {
      return <div className={classes.childrenWrapper}>{children}</div>;
    }, []);

  const Heading = useMemo(() => {
    return React.createElement(as, { className: classes.heading }, title);
  }, [as, title, classes]);

  return (
    <div className={classes.parentWrapper}>
      {Heading}
      {ChildrenWrapper}
    </div>
  );
};
