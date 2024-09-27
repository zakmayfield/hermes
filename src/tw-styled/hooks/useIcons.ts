import { useMemo } from "react";
import { IconType } from "react-icons";
import { PiSpinnerGap, PiShoppingCart, PiWarningCircle } from "react-icons/pi";

type IconName = "spin" | "cart" | "error";

export const useIcons = (names: IconName[]) => {
  const iconMap: Record<IconName, IconType> = {
    spin: PiSpinnerGap,
    cart: PiShoppingCart,
    error: PiWarningCircle
  };

  const icons = useMemo(() => {
    return names.reduce((acc, name) => {
      return { ...acc, [name]: iconMap[name] };
    }, {}) as Record<IconName, IconType>;
  }, [names, iconMap]);

  return icons;
};
