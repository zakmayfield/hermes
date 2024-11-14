"use client";
import { RefAttributes } from "react";
import { ITooltip, TooltipRefProps, Tooltip } from "react-tooltip";

type TooltipProps = ITooltip & RefAttributes<TooltipRefProps>;

export const useTooltip = (props: TooltipProps) => {
  return <Tooltip {...props} />;
};
