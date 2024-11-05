import { IconNames, IconVariants } from "@/shared/hooks";
import { BaseStyles } from "@/ui/types";

export type IconProps = {
  name: IconNames;
  id?: string;
  variant?: IconVariants;
  style?: BaseStyles;
};
