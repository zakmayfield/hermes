"use client";
import React from "react";
import { useClassNameResolver } from "@/ui";
import { IconProps } from "./Icon.types";
import { useIcons } from "@/shared/hooks/ui";
import { IconBaseProps } from "react-icons";

interface CustomIconProps extends IconBaseProps {
  "data-tooltip-html"?: string;
}

export const Icon = (props: IconProps) => {
  const { name, id, variant = "base", tooltipHtml, style } = props;

  const iconResult = useIcons({ names: [name], variant });

  const classes = useClassNameResolver({
    icon: { ...style }
  });

  return React.createElement(iconResult[name], {
    id,
    "data-tooltip-html": tooltipHtml,
    className: classes.get("icon")
  } as CustomIconProps);
};
