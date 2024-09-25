"use client";
import { useClassNames } from "@/tw-styled";
import { Children, IStyles } from "@/tw-styled/Styles";

export type TWrapperProps = {
  children: Children;
  className?: string;
  style?: {
    wrapper: IStyles;
  };
};

export const Wrapper = (props: TWrapperProps) => {
  const { children } = props;
  const classes = useClassNames({ ...props.style });

  return <div className={classes.wrapper}>{children}</div>;
};
