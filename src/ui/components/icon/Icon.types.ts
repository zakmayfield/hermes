import { IconNames, IconVariants } from "@/shared/hooks/ui";
import { BaseStyles } from "@/ui/types";

export type IconProps = {
  name: IconNames;
  id?: string;
  variant?: IconVariants;
  tooltipHtml?: string;
  style?: BaseStyles;
};
