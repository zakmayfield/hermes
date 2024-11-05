import { BaseStyles } from "@/ui/types";
import { WrapperElements } from "@/ui/types";

export type BoxProps = {
  children?: React.ReactNode;
  as?: WrapperElements;
  style?: BaseStyles;
};
