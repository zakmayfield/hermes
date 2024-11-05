import { BaseStyles } from "@/ui/types";

export type PulseProps = {
  size?: "sm" | "md" | "lg";
  style?: {
    parentWrapper?: BaseStyles;
    childrenWrapper?: BaseStyles;
    children?: BaseStyles;
  };
};
