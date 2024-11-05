import { BaseStyles } from "@/ui/types";

export type LabelProps = {
  options?: {
    text: string;
    htmlFor: string;
    visuallyHidden?: boolean;
  };
  style?: BaseStyles;
};
