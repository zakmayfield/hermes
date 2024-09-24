"use client";
import { utilityHooks } from "@/shared/hooks";
import { Children, IStyles } from "@/types/Styles";

export type TWrapperProps = {
  children: Children;
  className?: string;
  style?: {
    wrapper: IStyles;
  };
};

export const Wrapper = (props: TWrapperProps) => {
  const { children } = props;
  const classes = utilityHooks.useClassNames({ ...props.style });

  return <div className={classes.wrapper}>{children}</div>;
};
