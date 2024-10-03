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
  const styleMapGroups = {
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
