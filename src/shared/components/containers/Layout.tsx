"use client";
import { Heading } from "./Heading";
import { classHooks } from "@/shared/hooks";

export type TLayoutStyleProps = {
  classList?: {
    wrapperClassName?: string;
    headingClassName?: string;
    childrenClassName?: string;
  };
  style?: {
    width?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
    padding?: "sm" | "md" | "lg";
    position?: "left" | "center" | "right";
    childrenPadding?: "sm" | "md" | "lg";
    childrenFlex?: "row" | "col";
    childrenRounded?: "sm" | "md" | "lg";
  };
};

type TLayoutProps = TLayoutStyleProps & {
  children: React.ReactNode;
  heading?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  title?: string;
};

export const Layout = (props: TLayoutProps) => {
  const { children, heading, title = "" } = props;
  const classes = classHooks.useLayoutClasses({ ...props });

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
