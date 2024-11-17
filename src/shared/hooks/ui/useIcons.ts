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
  PiSignOutDuotone,
  PiUsers,
  PiUsersDuotone,
  PiShield
} from "react-icons/pi";
import { SiQuickbooks } from "react-icons/si";

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
  | "signout"
  | "users"
  | "shield"
  | "quickbooks";

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
      quickbooks: SiQuickbooks,
      shield: PiShield,
      signout: PiSignOut,
      spin: PiSpinnerGap,
      threeCircles: PiCirclesThree,
      trash: PiTrash,
      users: PiUsers,
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
      quickbooks: SiQuickbooks,
      shield: PiShield,
      signout: PiSignOutDuotone,
      spin: PiSpinnerGapDuotone,
      threeCircles: PiCirclesThreeDuotone,
      trash: PiTrashDuotone,
      users: PiUsersDuotone,
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
