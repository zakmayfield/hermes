import { BaseStyles } from "@/ui/types";
import { WrapperElements } from "@/ui/types";

export type LayoutProps = {
  children?: React.ReactNode;
  options?: { title?: React.ReactNode; as?: WrapperElements };
  style?: {
    parentWrapper?: BaseStyles;
    titleWrapper?: BaseStyles;
    bodyWrapper?: BaseStyles;
  };
};
