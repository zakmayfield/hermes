import { BaseStyles, Styles } from "@/tw-styled/types";

export type ButtonProps = {
  children?: React.ReactNode;
  handleClick?: () => void;
  options?: {
    variant?: Styles["buttonVariant"];
    type?: "button" | "submit";
    isDisabled?: boolean;
  };
  style?: BaseStyles;
};
