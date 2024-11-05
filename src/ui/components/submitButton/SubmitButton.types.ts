import { BaseStyles, Styles } from "@/ui/types";

export type SubmitButtonProps = {
  options?: {
    text?: string;
    variant?: Styles["buttonVariant"];
  };
  style?: BaseStyles;
};
