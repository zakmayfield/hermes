import { BaseStyles } from "@/tw-styled/types";

export type PulseProps = {
  size?: "sm" | "md" | "lg";
  style?: {
    parentWrapper?: BaseStyles;
    childrenWrapper?: BaseStyles;
    children?: BaseStyles;
  };
};
