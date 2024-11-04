import { IconNames, IconVariants } from "@/shared/hooks";
import { BaseStyles } from "@/tw-styled/types";

export type IconProps = {
  name: IconNames;
  variant?: IconVariants;
  style?: BaseStyles;
};
