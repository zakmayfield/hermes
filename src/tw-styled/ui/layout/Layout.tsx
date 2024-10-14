"use client";
import { Children, HeadingElements, BaseStyles } from "@/tw-styled/types";
import { useStyleToClass } from "@/tw-styled/tools";
import { defaultStyles } from "./Layout.defaultStyles";
import { useLayoutUi } from "./Layout.ui";
import { useDefaultStyles } from "../hooks";

export type LayoutProps = {
  children?: Children;
  title?: string;
  headingAs?: HeadingElements;
  headingChildren?: Children;
  style?: {
    parentWrapper?: BaseStyles;
    headingWrapper?: BaseStyles;
    heading?: BaseStyles;
    headingChildren?: BaseStyles;
    childrenWrapper?: BaseStyles;
    children?: BaseStyles;
  };
};

export const Layout = (props: LayoutProps) => {
  const { style, ...rest } = props;

  const styles = useDefaultStyles(style, defaultStyles);
  const classes = useStyleToClass(styles);
  const Layout = useLayoutUi({ classes, ...rest });

  return Layout;
};
