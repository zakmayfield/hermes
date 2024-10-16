"use client";
import { Children, WrapperElements, BaseStyles } from "@/tw-styled/types";
import { defaultStyles } from "./Wrapper.defaultStyles";
import { useWrapperUi } from "./Wrapper.ui";
import { useStyleToClass } from "@/tw-styled/tools";
import { useDefaultStyles } from "../hooks";

export type WrapperProps = {
  children?: Children;
  as?: WrapperElements;
  style?: {
    parentWrapper?: BaseStyles;
    childrenWrapper?: BaseStyles;
  };
};

export const Wrapper = (props: WrapperProps) => {
  const { style, ...rest } = props;

  const styles = useDefaultStyles(style, defaultStyles);
  const classes = useStyleToClass(styles);

  const Wrapper = useWrapperUi({ ...rest, classes });

  return Wrapper;
};
