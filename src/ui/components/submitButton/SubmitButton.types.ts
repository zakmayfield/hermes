import { BaseStyles, Styles } from "@/tw-styled/types";

export type SubmitButtonProps = {
  options?: {
    text?: string;
    variant?: Styles["buttonVariant"];
  };
  style?: BaseStyles;
};
