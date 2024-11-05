import { BaseStyles } from "@/ui/types";
import { TextElements } from "@/ui/types";

export type TextProps = {
  as?: TextElements;
  children?: React.ReactNode;
  described_by?: string;
  is_hidden?: boolean;
  style?: BaseStyles;
};
