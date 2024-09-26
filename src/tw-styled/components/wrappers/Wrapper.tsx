"use client";
import { useClassNames } from "@/tw-styled";
import { styleHooks } from "@/tw-styled/hooks";
import { Children, IStyles } from "@/tw-styled/Styles";

export type WrapperProps = {
  children?: Children;
  style?: {
    parentWrapper?: IStyles;
    childrenWrapper?: IStyles;
  };
};

export const Wrapper = (props: WrapperProps) => {
  const { children, style } = props;
  const defaultStyles = styleHooks.useDefaultWrapper();

  const styles: WrapperProps["style"] = {
    parentWrapper: {
      ...defaultStyles.parentWrapper,
      ...style?.parentWrapper
    },
    childrenWrapper: {
      ...defaultStyles.childrenWrapper,
      ...style?.childrenWrapper
    }
  };

  const classes = useClassNames({ ...styles });
  return (
    <div className={classes.parentWrapper}>
      <div className={classes.childrenWrapper}>{children}</div>
    </div>
  );
};
