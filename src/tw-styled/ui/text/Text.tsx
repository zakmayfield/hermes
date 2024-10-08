"use client";
import { Children, BaseStyleProps, TextElements } from "@/tw-styled/types";
import { useStyleResolver } from "@/tw-styled/tools";
import { defaultStyles } from "./Text.defaultStyles";
import { useTextUi } from "./Text.ui";

export type TextProps = {
  as?: TextElements;
  children?: Children;
  described_by?: string;
  is_hidden?: boolean;
  style?: {
    parentWrapper?: BaseStyleProps;
  };
};

export const Text = (props: TextProps) => {
  const { style, ...rest } = props;

  const classes = useStyleResolver({ ...defaultStyles(style) });
  const Text = useTextUi({ classes, ...rest });

  return Text;
};
