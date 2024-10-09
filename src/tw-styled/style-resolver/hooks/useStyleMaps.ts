import {
  StyleGroups,
  alignmentGroup,
  animationGroup,
  backgroundGroup,
  buttonGroup,
  dimensionsGroup,
  layoutGroup,
  marginGroup,
  otherGroup,
  paddingGroup,
  spaceGroup,
  typographyGroup
} from "@/tw-styled/style-resolver/utils";
import { StylePropKeys } from "@/tw-styled/types";
import React from "react";

export const useStyleMaps = () => {
  const styleGroups = {
    ...dimensionsGroup,
    ...layoutGroup,
    ...spaceGroup,
    ...paddingGroup,
    ...marginGroup,
    ...alignmentGroup,
    ...typographyGroup,
    ...backgroundGroup,
    ...animationGroup,
    ...buttonGroup,
    ...otherGroup
  };

  const handleMapValue = React.useCallback(
    (payload: { group: StyleGroups; styleKey: StylePropKeys; styleValue: string }) => {
      const group = styleGroups[payload.group];
      const map = group[payload.styleKey as keyof typeof group];
      const value = map[payload.styleValue as keyof typeof map];

      return value as string;
    },
    []
  );

  return {
    handleMapValue
  };
};
