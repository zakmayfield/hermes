"use client";
import { classHooks } from "@/shared/hooks";

export type TContentWrapperStyleProps = {
  className?: string;
  style?: {
    width?: "auto" | "sm" | "md" | "lg" | "full";
    padding?: "sm" | "md" | "lg";
    paddingX?: "sm" | "md" | "lg";
    margin?: "sm" | "md" | "lg";
    position?: "left" | "center" | "right";
    flex?: "row" | "col";
    gap?: "sm" | "md" | "lg";
    flexCenter?: boolean;
    rounded?: "sm" | "md" | "lg";
  };
};

type TContentWrapperProps = TContentWrapperStyleProps & {
  children: React.ReactNode;
};

export const ContentWrapper = (props: TContentWrapperProps) => {
  const { children } = props;
  const classes = classHooks.useContentWrapperClasses({ ...props });

  return <div className={classes.wrapper}>{children}</div>;
};
