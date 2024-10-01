"use client";
import { Heading } from "./Heading";
import { useClassNameResolver, useStyles } from "@/tw-styled";
import { Children, HeadingElements, StyleProps } from "@/tw-styled/types";

export type LayoutProps = {
  children?: Children;
  title?: string;
  heading?: HeadingElements;
  style?: {
    parentWrapper?: StyleProps;
    heading?: StyleProps;
    childrenWrapper?: StyleProps;
  };
};

export const Layout = (props: LayoutProps) => {
  const { children, heading = "h1", title = "", style } = props;

  const styles = useStyles({
    key: "layout",
    style
  });
  const classes = useClassNameResolver({ ...styles });

  return (
    <div className={classes.parentWrapper}>
      {title && (
        <Heading
          as={heading}
          style={{
            parentWrapper: {
              className: classes.heading
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
