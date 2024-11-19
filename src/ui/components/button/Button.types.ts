import { BaseStyles, Styles } from "@/ui/types";

export type ButtonProps = {
  children?: React.ReactNode;
  handleClick?: () => void;
  options?: {
    id?: string;
    variant?: Styles["buttonVariant"];
    type?: "button" | "submit";
    isDisabled?: boolean;
  };
  style?: BaseStyles;
};
