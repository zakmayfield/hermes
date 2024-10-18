import { useCallback, useMemo } from "react";
import { IconType } from "react-icons";
import {
  PiCheckCircle,
  PiCheckCircleDuotone,
  PiSpinnerGap,
  PiSpinnerGapDuotone,
  PiShoppingCart,
  PiShoppingCartDuotone,
  PiWarningCircle,
  PiWarningCircleDuotone,
  PiInfo,
  PiInfoDuotone,
  PiXCircle,
  PiXCircleDuotone
} from "react-icons/pi";

export type IconNames = "spin" | "cart" | "error" | "info" | "check" | "x";
export type IconVariants = "base" | "duotone";

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
      info: PiInfo,
      check: PiCheckCircle,
      x: PiXCircle
    };
  }, []);

  const getVariantIcons = useCallback(() => {
    return {
      spin: PiSpinnerGapDuotone,
      cart: PiShoppingCartDuotone,
      error: PiWarningCircleDuotone,
      info: PiInfoDuotone,
      check: PiCheckCircleDuotone,
      x: PiXCircleDuotone
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
