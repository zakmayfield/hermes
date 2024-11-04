"use client";
import React from "react";
import { useStyleToClass } from "@/tw-styled/tools";
import { IconProps } from "./Icon.types";
import { useIcons } from "@/shared/hooks";

export const Icon = (props: IconProps) => {
  const { name, variant = "base", style } = props;

  const iconResult = useIcons({ names: [name], variant });

  const classes = useStyleToClass({
    icon: { ...style }
  });

  return React.createElement(iconResult[name], {
    className: classes.get("icon")
  });
};
