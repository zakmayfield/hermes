import { BaseStyles, HeadingElements } from "@/tw-styled/types";

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
