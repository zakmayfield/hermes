"use client";
import { Children, TextElements, BaseStyles } from "@/tw-styled/types";
import { useStyleToClass } from "@/tw-styled/tools";
import { defaultStyles } from "./Text.defaultStyles";
import { useTextUi } from "./Text.ui";
import { useDefaultStyles } from "../hooks";

export type TextProps = {
  as?: TextElements;
  children?: Children;
  described_by?: string;
  is_hidden?: boolean;
  style?: {
    parentWrapper?: BaseStyles;
  };
};

export const Text = (props: TextProps) => {
  const { style, ...rest } = props;

  const styles = useDefaultStyles(style, defaultStyles);
  const classes = useStyleToClass(styles);
  const Text = useTextUi({ classes, ...rest });

  return Text;
};
