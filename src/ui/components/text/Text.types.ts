import { BaseStyles, TextElements } from "@/tw-styled/types";

export type TextProps = {
  as?: TextElements;
  children?: React.ReactNode;
  described_by?: string;
  is_hidden?: boolean;
  style?: BaseStyles;
};
