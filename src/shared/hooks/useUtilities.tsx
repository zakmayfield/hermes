"use client";
import { RefAttributes, useState } from "react";
import { toast } from "react-toastify";
import { ITooltip, TooltipRefProps, Tooltip } from "react-tooltip";

type ToastVariants = "success" | "error" | "warn" | "info";
type TooltipProps = ITooltip & RefAttributes<TooltipRefProps>;

export const utilityHooks = {
  useToast: () => {
    const notify = (message: string, variant?: ToastVariants) => {
      const defaultVariant = !variant ? "success" : variant;
      return toast[defaultVariant](message);
    };

    return {
      notify
    };
  },

  useTooltip: (props: TooltipProps) => {
    const tt = () => <Tooltip {...props} />;

    return {
      Tooltip: tt
    };
  },

  useAccordion: () => {
    const [expandedId, setExpandedId] = useState<string | null>(null);
    const is_expanded = (id: string) => id === expandedId;
    const handle_expand = (id: string) =>
      is_expanded(id) ? setExpandedId(null) : setExpandedId(id);

    return { handle_expand, is_expanded };
  }
};
