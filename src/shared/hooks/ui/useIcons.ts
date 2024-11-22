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
  PiShield,
  PiBellRinging,
  PiBellRingingDuotone,
  PiGlobe,
  PiGlobeDuotone,
  PiCrown,
  PiCrownDuotone,
  PiGear,
  PiGearDuotone,
  PiClipboardText,
  PiClipboardTextDuotone,
  PiArrowURightDown,
  PiArrowURightDownDuotone,
  PiArrowsDownUp
} from "react-icons/pi";
import { SiQuickbooks } from "react-icons/si";
import { RxHamburgerMenu } from "react-icons/rx";

export type IconNames =
  | "spin"
  | "cart"
  | "error"
  | "info"
  | "check"
  | "x"
  | "trash"
  | "downarrowCircle"
  | "house"
  | "threeCircles"
  | "lock"
  | "signout"
  | "users"
  | "shield"
  | "quickbooks"
  | "bell"
  | "hamburger"
  | "globe"
  | "crown"
  | "gear"
  | "clipboard"
  | "uArrowDown"
  | "arrowsUpDown";

export type IconVariants = "base" | "duotone";

type UseIconsProps = {
  names: IconNames[];
  variant?: IconVariants;
};

export const useIcons = (props: UseIconsProps) => {
  const { names, variant = "base" } = props;

  const getBaseIcons = useCallback(() => {
    return {
      arrowsUpDown: PiArrowsDownUp,
      bell: PiBellRinging,
      cart: PiShoppingCart,
      check: PiCheckCircle,
      clipboard: PiClipboardText,
      crown: PiCrown,
      downarrowCircle: PiCaretCircleDown,
      error: PiWarningCircle,
      gear: PiGear,
      globe: PiGlobe,
      hamburger: RxHamburgerMenu,
      house: PiHouse,
      info: PiInfo,
      lock: PiLock,
      quickbooks: SiQuickbooks,
      shield: PiShield,
      signout: PiSignOut,
      spin: PiSpinnerGap,
      threeCircles: PiCirclesThree,
      trash: PiTrash,
      uArrowDown: PiArrowURightDown,
      users: PiUsers,
      x: PiXCircle
    };
  }, []);

  const getVariantIcons = useCallback(() => {
    return {
      arrowsUpDown: PiArrowsDownUp,
      bell: PiBellRingingDuotone,
      cart: PiShoppingCartDuotone,
      check: PiCheckCircleDuotone,
      clipboard: PiClipboardTextDuotone,
      crown: PiCrownDuotone,
      downarrowCircle: PiCaretCircleDownDuotone,
      error: PiWarningCircleDuotone,
      gear: PiGearDuotone,
      globe: PiGlobeDuotone,
      hamburger: RxHamburgerMenu,
      house: PiHouseDuotone,
      info: PiInfoDuotone,
      lock: PiLockDuotone,
      quickbooks: SiQuickbooks,
      shield: PiShield,
      signout: PiSignOutDuotone,
      spin: PiSpinnerGapDuotone,
      threeCircles: PiCirclesThreeDuotone,
      trash: PiTrashDuotone,
      uArrowDown: PiArrowURightDownDuotone,
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
