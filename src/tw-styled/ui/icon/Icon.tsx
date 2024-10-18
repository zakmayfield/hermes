"use client";
import { IconNames, IconVariants, useIcons, useStyleToClass } from "@/tw-styled/tools";
import { BaseStyles } from "@/tw-styled/types";
import React from "react";

type IconProps = {
  name: IconNames;
  variant?: IconVariants;
  style?: {
    icon?: BaseStyles;
  };
};

export const Icon = (props: IconProps) => {
  const { name, variant = "base", style } = props;
  const iconResult = useIcons({ names: [name], variant });

  const styles = {
    icon: { ...style?.icon }
  } satisfies IconProps["style"];

  const classes = useStyleToClass(styles);

  return React.createElement(iconResult[name], { className: classes.get("icon") });
};
