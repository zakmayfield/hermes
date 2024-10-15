import { StyleToClassProps } from "@/tw-styled/types";
import { SpinProps } from "./Spin";

export const useSpinStyles = (style?: StyleToClassProps) => {
  return {
    parentWrapper: {
      ...style?.wrapper
    },
    icon: {
      place: "center",
      fontSize: "lg",
      animation: "spin",
      ...style?.icon
    }
  } satisfies SpinProps["style"];
};
