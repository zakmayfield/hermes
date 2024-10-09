import { useCallback, useMemo } from "react";
import { IconType } from "react-icons";
import {
  PiSpinnerGap,
  PiSpinnerGapDuotone,
  PiShoppingCart,
  PiShoppingCartDuotone,
  PiWarningCircle,
  PiWarningCircleDuotone,
  PiInfo,
  PiInfoDuotone
} from "react-icons/pi";

type IconNames = "spin" | "cart" | "error" | "info";
type IconVariants = "base" | "duotone";

type UseIconsProps = {
  names: IconNames[];
  variant?: IconVariants;
};

export const useIcons = (props: UseIconsProps) => {
  const { names, variant = "base" } = props;

  const getBaseIcons = useCallback(() => {
    return {
      spin: PiSpinnerGap,
      cart: PiShoppingCart,
      error: PiWarningCircle,
      info: PiInfo
    };
  }, []);

  const getVariantIcons = useCallback(() => {
    return {
      spin: PiSpinnerGapDuotone,
      cart: PiShoppingCartDuotone,
      error: PiWarningCircleDuotone,
      info: PiInfoDuotone
    };
  }, []);

  const iconMap = useMemo(() => {
    return {
      base: getBaseIcons(),
      duotone: getVariantIcons()
    };
  }, [getBaseIcons, getVariantIcons]);

  const icons = useMemo(() => {
    return names.reduce((acc, name) => {
      return {
        ...acc,
        [name]: iconMap[variant][name]
      };
    }, {}) as Record<IconNames, IconType>;
  }, [names, variant, iconMap]);

  return icons;
};
