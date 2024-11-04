import { BaseStyles } from "@/tw-styled/types";

export type LabelProps = {
  options?: {
    text: string;
    htmlFor: string;
    visuallyHidden?: boolean;
  };
  style?: BaseStyles;
};
