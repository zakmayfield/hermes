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
  PiTrashDuotone,
  PiCaretCircleDown,
  PiCaretCircleDownDuotone,
  PiHouse,
  PiHouseDuotone,
  PiCirclesThree,
  PiCirclesThreeDuotone,
  PiLock,
  PiLockDuotone,
  PiSignOut,
  PiSignOutDuotone
} from "react-icons/pi";

export type IconNames =
  | "spin"
  | "cart"
  | "error"
  | "info"
  | "check"
  | "x"
  | "trash"
  | "downarrow"
  | "house"
  | "threeCircles"
  | "lock"
  | "signout";

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
      downarrow: PiCaretCircleDown,
      error: PiWarningCircle,
      house: PiHouse,
      info: PiInfo,
      lock: PiLock,
      signout: PiSignOut,
      spin: PiSpinnerGap,
      threeCircles: PiCirclesThree,
      trash: PiTrash,
      x: PiXCircle
    };
  }, []);

  const getVariantIcons = useCallback(() => {
    return {
      cart: PiShoppingCartDuotone,
      check: PiCheckCircleDuotone,
      downarrow: PiCaretCircleDownDuotone,
      error: PiWarningCircleDuotone,
      house: PiHouseDuotone,
      info: PiInfoDuotone,
      lock: PiLockDuotone,
      signout: PiSignOutDuotone,
      spin: PiSpinnerGapDuotone,
      threeCircles: PiCirclesThreeDuotone,
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
