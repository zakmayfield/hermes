"use client";
import { classHooks } from "@/shared/hooks";
import { Children, IBaseStyles, IFlexStyles, IOtherStyles } from "@/types/Styles";

export type TWrapperProps = {
  children: Children;
  className?: string;
  style?: IBaseStyles & IFlexStyles & IOtherStyles;
};

export const Wrapper = (props: TWrapperProps) => {
  const { children } = props;
  const classes = classHooks.useWrapperClasses({ ...props });

  return <div className={classes.wrapper}>{children}</div>;
};
