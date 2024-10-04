import {
  alignmentMap,
  animationsMap,
  backgroundMap,
  buttonMap,
  dimensionsMap,
  layoutMap,
  loaderMap,
  marginMap,
  otherMap,
  paddingMap,
  spaceMap,
  typographyMap
} from "@/tw-styled/style-resolver/utils";

export const useStyleMaps = () => {
  const styleMapGroups = {
    ...dimensionsMap,
    ...layoutMap,
    ...spaceMap,
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

  type StyleMapGroupKeys = keyof typeof styleMapGroups;

  // Using `useMemo` causes an error stating that more or fewer hooks were rendered
  const getStyleMapFromGroup = <T extends StyleMapGroupKeys>(
    group: T,
    map: keyof (typeof styleMapGroups)[T]
  ) => {
    const groupMap = styleMapGroups[group];
    return { ...groupMap[map] };
  };

  return {
    getStyleMapFromGroup
  };
};
