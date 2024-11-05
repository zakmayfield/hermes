"use client";
import React from "react";
import { useClassNameResolver } from "@/ui";
import { IconProps } from "./Icon.types";
import { useIcons } from "@/shared/hooks";

export const Icon = (props: IconProps) => {
  const { name, id, variant = "base", style } = props;

  const iconResult = useIcons({ names: [name], variant });

  const classes = useClassNameResolver({
    icon: { ...style }
  });

  return React.createElement(iconResult[name], {
    id,
    className: classes.get("icon")
  });
};
