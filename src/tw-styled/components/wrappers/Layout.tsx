"use client";
import { useClassNames } from "@/tw-styled";
import { Children, IStyles, Headings } from "@/tw-styled/Styles";
import { Heading } from "./Heading";
import { styleHooks } from "@/tw-styled/hooks";

export type LayoutProps = {
  heading?: Headings;
  title?: string;
  children?: Children;
  style?: {
    wrapper?: IStyles;
    heading?: IStyles;
    children?: IStyles;
  };
};

export const Layout = (props: LayoutProps) => {
  const { children, heading = "h1", title = "", style } = props;
  const defaultStyles = styleHooks.useDefaultLayout();

  const styles: LayoutProps["style"] = {
    wrapper: {
      ...defaultStyles.wrapper,
      ...style?.wrapper
    },
    heading: {
      ...defaultStyles.heading,
      ...style?.heading
    },
    children: {
      ...defaultStyles.children,
      ...style?.children
    }
  };

  const classes = useClassNames({ ...styles });

  return (
    <div className={classes.wrapper}>
      {title && (
        <Heading
          as={heading}
          style={{
            wrapper: {
              className: classes.heading
            }
          }}
        >
          {title}
        </Heading>
      )}
      <div className={classes.children}>{children}</div>
    </div>
  );
};
