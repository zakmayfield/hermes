"use client";
import {
  Children,
  IBaseStyles,
  IFlexStyles,
  IOtherStyles,
  THeadings
} from "@/types/Styles";
import { Heading } from "./Heading";
import { classHooks } from "@/shared/hooks";

export type TLayoutTemplateStyleProps = {
  classList?: {
    wrapperClassName?: string;
    headingClassName?: string;
    childrenClassName?: string;
  };
  style?: {
    wrapper?: IBaseStyles & IFlexStyles;
    heading?: IBaseStyles & IFlexStyles;
    children?: IBaseStyles & IFlexStyles & IOtherStyles;
  };
};

type TLayoutTemplateProps = TLayoutTemplateStyleProps & {
  children: Children;
  heading?: THeadings;
  title?: string;
};

export const LayoutTemplate = (props: TLayoutTemplateProps) => {
  const { children, heading, title = "" } = props;
  const classes = classHooks.useLayoutTemplateClasses({ ...props });

  return (
    <div className={classes.wrapper}>
      {heading && (
        <Heading
          as={heading}
          content={title}
          className={classes.heading}
        />
      )}
      <div className={classes.children}>{children}</div>
    </div>
  );
};
