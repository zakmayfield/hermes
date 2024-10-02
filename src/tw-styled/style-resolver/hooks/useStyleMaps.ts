import { useMemo } from "react";
import {
  alignmentMap,
  animationsMap,
  backgroundMap,
  buttonMap,
  layoutMap,
  loaderMap,
  marginMap,
  otherMap,
  paddingMap,
  typographyMap
} from "@/tw-styled/style-resolver/utils";

export const useStyleMaps = () => {
  const styleMapGroups = useMemo(() => {
    return {
      ...layoutMap,
      ...paddingMap,
      ...marginMap,
      ...alignmentMap,
      ...typographyMap,
      ...backgroundMap,
      ...animationsMap,
      ...buttonMap,
      ...loaderMap,
      ...otherMap
    };
  }, []);

  type StyleMapGroupKeys = keyof typeof styleMapGroups;

  const getAllStyleMaps = () =>
    useMemo(() => {
      return {
        ...styleMapGroups.layout,
        ...styleMapGroups.padding,
        ...styleMapGroups.margin,
        ...styleMapGroups.alignment,
        ...styleMapGroups.typography,
        ...styleMapGroups.background,
        ...styleMapGroups.animations,
        ...styleMapGroups.button,
        ...styleMapGroups.loader,
        ...styleMapGroups.other
      };
    }, []);

  const getStyleMapFromGroup = <T extends StyleMapGroupKeys>(
    group: T,
    map: keyof (typeof styleMapGroups)[T]
  ) =>
    useMemo(() => {
      const groupMap = styleMapGroups[group];
      return { ...groupMap[map] };
    }, []);

  return {
    getAllStyleMaps,
    getStyleMapFromGroup
  };
};
