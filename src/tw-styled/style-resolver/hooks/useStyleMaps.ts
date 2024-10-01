import { useCallback, useMemo } from "react";
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

  const getAllStyleMaps = useCallback(() => {
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

  const getStyleMapGroup = useCallback((group: StyleMapGroupKeys) => {
    return { ...styleMapGroups[group] };
  }, []);

  const getStyleMapGroups = useCallback((groups: StyleMapGroupKeys[]) => {
    return [...new Set(groups)].reduce((acc, group) => {
      return {
        ...acc,
        ...styleMapGroups[group]
      };
    }, {});
  }, []);

  const getStyleMapFromGroup = useCallback(
    <T extends StyleMapGroupKeys>(group: T, map: keyof (typeof styleMapGroups)[T]) => {
      const groupMap = styleMapGroups[group];
      return { ...groupMap[map] };
    },
    []
  );

  return {
    getAllStyleMaps,
    getStyleMapGroup,
    getStyleMapGroups,
    getStyleMapFromGroup
  };
};
