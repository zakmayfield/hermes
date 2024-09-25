"use client";
import { useClassNames } from "@/tw-styled";
import { Children, IStyles, THeadings } from "@/tw-styled/Styles";
import { Heading } from "./Heading";
import { merge } from "@/utils/ui";

type TLayoutProps = {
  children: Children;
  heading?: THeadings;
  title?: string;
  classList?: {
    wrapperClassName?: string;
    headingClassName?: string;
    childrenClassName?: string;
  };
  style?: {
    wrapper?: IStyles;
    heading?: IStyles;
    children?: IStyles;
  };
};

export const Layout = (props: TLayoutProps) => {
  const {
    children,
    heading,
    title = "",
    classList: {
      wrapperClassName = "",
      headingClassName = "",
      childrenClassName = ""
    } = {}
  } = props;

  const classes = useClassNames({ ...props.style });

  return (
    <div className={merge(classes.wrapper + wrapperClassName)}>
      {heading && (
        <Heading
          as={heading}
          content={title}
          className={merge(classes.heading + headingClassName)}
        />
      )}
      <div className={merge(classes.children + childrenClassName)}>{children}</div>
    </div>
  );
};
