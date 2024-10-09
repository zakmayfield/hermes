"use client";
import { Children, BaseStyleProps, WrapperElements } from "@/tw-styled/types";
import { useStyleResolver } from "@/tw-styled/tools";
import { defaultStyles } from "./Wrapper.defaultStyles";
import { useWrapperUi } from "./Wrapper.ui";

export type WrapperProps = {
  children?: Children;
  as?: WrapperElements;
  style?: {
    parentWrapper?: BaseStyleProps;
    childrenWrapper?: BaseStyleProps;
    children?: BaseStyleProps;
  };
};

export const Wrapper = (props: WrapperProps) => {
  const { style, ...rest } = props;

  const classes = useStyleResolver({ ...defaultStyles(style) });
  const Wrapper = useWrapperUi({ ...rest, classes });

  return Wrapper;
};
