"use client";
import { classHooks } from "@/shared/hooks";

export type TFlexStyleProps = {
  className?: string;
  style?: {
    dir?: "row" | "col";
    gap?: "sm" | "md" | "lg";
    padding?: "sm" | "md" | "lg";
    position?: "left" | "center" | "right";
  };
};

type TFlexProps = TFlexStyleProps & {
  children?: React.ReactNode;
};

export const Flex = (props: TFlexProps) => {
  const { children } = props;
  const classes = classHooks.useFlexClasses({ ...props });

  return <div className={classes.wrapper}>{children}</div>;
};
