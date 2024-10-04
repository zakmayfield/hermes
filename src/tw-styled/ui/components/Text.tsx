"use client";
import React, { useMemo } from "react";
import { Children, DefaultStyleProps, TextElements } from "@/tw-styled/types";
import { styleHooks, uiHooks } from "../hooks";
import { useStyleResolver } from "@/tw-styled/tools";

export type TextProps = {
  as?: TextElements;
  children?: Children;
  described_by?: string;
  is_hidden?: boolean;
  style?: {
    parentWrapper?: DefaultStyleProps;
  };
};

export const Text = (props: TextProps) => {
  const { style, ...rest } = props;

  const styles = styleHooks.useTextStyles({ style });
  const classes = useStyleResolver(styles);
  const { Text } = uiHooks.useTextUi({ classes, ...rest });

  return <Text />;
};
