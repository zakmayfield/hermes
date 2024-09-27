import { IconType } from "react-icons";
import { PiSpinnerGap, PiShoppingCart, PiWarningCircle } from "react-icons/pi";

type IconName = "spin" | "cart" | "error";

export const useIcons = (names: IconName[]) => {
  const iconMap: Record<IconName, IconType> = {
    spin: PiSpinnerGap,
    cart: PiShoppingCart,
    error: PiWarningCircle
  };

  const payload = {} as Record<IconName, IconType>;

  for (const name of names) {
    payload[name] = iconMap[name];
  }

  return payload;
};
