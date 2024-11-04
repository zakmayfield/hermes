import { BaseStyles, WrapperElements } from "@/tw-styled/types";

export type LayoutProps = {
  children?: React.ReactNode;
  options?: { title?: React.ReactNode; as?: WrapperElements };
  style?: {
    parentWrapper?: BaseStyles;
    titleWrapper?: BaseStyles;
    bodyWrapper?: BaseStyles;
  };
};
