"use client";
import { Children, IStyles, THeadings } from "@/types/Styles";
import { Heading } from "./Heading";
import { utilityHooks } from "@/shared/hooks";
import { merge } from "@/utils/ui";

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

  const classes = utilityHooks.useClassNames({ ...props.style });

  console.log({ classes });

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
