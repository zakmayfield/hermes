"use client";
import { Heading } from "./Heading";
import { useStyleResolver, useStyles } from "@/tw-styled";
import { Children, HeadingElements, StyleProps } from "@/tw-styled/types";

export type LayoutProps = {
  children?: Children;
  title?: string;
  heading?: HeadingElements;
  style?: {
    parentWrapper?: StyleProps;
    childrenWrapper?: StyleProps;
    children?: StyleProps;
    headingWrapper?: StyleProps;
    headingChildren?: StyleProps;
  };
};

export const Layout = (props: LayoutProps) => {
  const { children, heading = "h1", title = "", style } = props;

  const styles = useStyles({
    key: "layout",
    style
  });
  const classes = useStyleResolver({ ...styles });

  return (
    <div className={classes.parentWrapper}>
      {title && (
        <Heading
          as={heading}
          style={{
            parentWrapper: {
              className: classes.headingParent
            },
            childrenWrapper: {
              className: classes.headingChildren
            }
          }}
        >
          {title}
        </Heading>
      )}
      <div className={classes.childrenWrapper}>{children}</div>
    </div>
  );
};
