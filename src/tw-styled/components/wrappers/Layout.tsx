"use client";
import { useClassNames } from "@/tw-styled";
import { Children, IStyles, Headings } from "@/tw-styled/Styles";
import { Heading } from "./Heading";
import { styleHooks, useStyles } from "@/tw-styled/hooks";

export type LayoutProps = {
  heading?: Headings;
  title?: string;
  children?: Children;
  style?: {
    parentWrapper?: IStyles;
    heading?: IStyles;
    childrenWrapper?: IStyles;
  };
};

export const Layout = (props: LayoutProps) => {
  const { children, heading = "h1", title = "", style } = props;

  // const styles = useStyles({
  //   key: "layout",
  //   style
  // });
  const x = styleHooks.useLayoutStyles({ ...style });
  const classes = useClassNames({ ...x });

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
