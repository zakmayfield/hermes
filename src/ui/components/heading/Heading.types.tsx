import { BaseStyles } from "@/tw-styled/types";
import { HeadingElements } from "@/ui/types";

export type HeadingProps = {
  children?: React.ReactNode;
  as?: HeadingElements;
  text?: string;
  style?: {
    parentWrapper?: BaseStyles;
    heading?: BaseStyles;
    childrenWrapper?: BaseStyles;
  };
};
