import { BaseStyles } from "@/tw-styled/types";
import { WrapperElements } from "@/ui/types";

export type BoxProps = {
  children?: React.ReactNode;
  as?: WrapperElements;
  style?: BaseStyles;
};
