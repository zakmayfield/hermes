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
  PiXCircleDuotone,
  PiTrash,
  PiTrashDuotone
} from "react-icons/pi";

export type IconNames = "spin" | "cart" | "error" | "info" | "check" | "x" | "trash";
export type IconVariants = "base" | "duotone";

type UseIconsProps = {
  names: IconNames[];
  variant?: IconVariants;
};

export const useIcons = (props: UseIconsProps) => {
  const { names, variant = "base" } = props;

  const getBaseIcons = useCallback(() => {
    return {
      cart: PiShoppingCart,
      check: PiCheckCircle,
      error: PiWarningCircle,
      info: PiInfo,
      spin: PiSpinnerGap,
      trash: PiTrash,
      x: PiXCircle
    };
  }, []);

  const getVariantIcons = useCallback(() => {
    return {
      cart: PiShoppingCartDuotone,
      check: PiCheckCircleDuotone,
      error: PiWarningCircleDuotone,
      info: PiInfoDuotone,
      spin: PiSpinnerGapDuotone,
      trash: PiTrashDuotone,
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
