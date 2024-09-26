"use client";
import { useClassNames } from "@/tw-styled";
import { Children, IStyles, Headings } from "@/tw-styled/Styles";
import { Heading } from "./Heading";

type TLayoutProps = {
  children: Children;
  heading?: Headings;
  title?: string;
  style?: {
    wrapper?: IStyles;
    heading?: IStyles;
    children?: IStyles;
  };
};

export const Layout = (props: TLayoutProps) => {
  const { children, heading, title = "" } = props;

  const classes = useClassNames({ ...props.style });

  return (
    <div className={classes.wrapper}>
      {heading && (
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
