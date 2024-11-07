import { BaseStyles } from "@/ui/types";
import { HeadingElements } from "@/ui/types";

export type HeadingProps = {
  children?: React.ReactNode;
  as?: HeadingElements;
  text?: string;
  style?: BaseStyles;
};
