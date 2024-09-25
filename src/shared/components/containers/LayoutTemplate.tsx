"use client";
import { Children, IStyles, THeadings } from "@/types/Styles";
import { Heading } from "./Heading";
import { merge } from "@/utils/ui";
import { useClassNames } from "@/tw-styled";

export type TLayoutTemplateStyleProps = {
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

type TLayoutTemplateProps = TLayoutTemplateStyleProps & {
  children: Children;
  heading?: THeadings;
  title?: string;
};

export const LayoutTemplate = (props: TLayoutTemplateProps) => {
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
