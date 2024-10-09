"use client";
import { RefAttributes } from "react";
import { toast } from "react-toastify";
import { ITooltip, TooltipRefProps, Tooltip } from "react-tooltip";

type ToastVariants = "success" | "error" | "warn" | "info";
type TooltipProps = ITooltip & RefAttributes<TooltipRefProps>;

type AccordionProps = {
  data: AccordionItem[];
};
type AccordionItem = {
  id: string;
  title: string;
  body: {
    id: string;
    child: React.ReactNode;
  }[];
};

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
    const tt = <Tooltip {...props} />;

    return {
      Tooltip: tt
    };
  }
};
