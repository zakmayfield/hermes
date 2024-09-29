import { useMemo } from "react";

type Maps = Record<string, Record<string, string>>;

export const useTestStyleMaps = () => {
  return useMemo(() => {
    const baseMap = {
      none: ""
    };

    const flexPositionMap: Record<string, Record<string, string>> = {
      row: {
        "top-left": "items-start",
        "center-left": "items-center justify-start",
        "bottom-left": "items-end",
        "top-center": "items-start justify-center",
        "center-center": "items-center justify-center",
        "bottom-center": "items-end justify-center",
        "top-right": "items-start justify-end",
        "center-right": "items-center justify-end",
        "bottom-right": "items-end justify-end"
      },
      col: {
        "top-left": "justify-start",
        "center-left": "justify-center",
        "bottom-left": "justify-end",
        "top-center": "items-center justify-start",
        "center-center": "items-center justify-center",
        "bottom-center": "items-center justify-end",
        "top-right": "items-end justify-start",
        "center-right": "items-end justify-end",
        "bottom-right": "items-end justify-end"
      }
    };

    const styleMaps: Maps = {
      paddingMap: {
        ...baseMap,
        zero: "p-0",
        sm: "p-2",
        md: "p-4",
        lg: "p-6"
      },

      paddingXMap: {
        ...baseMap,
        zero: "px-0",
        sm: "px-2",
        md: "px-4",
        lg: "px-6"
      },

      paddingYMap: {
        ...baseMap,
        zero: "py-0",
        sm: "py-2",
        md: "py-4",
        lg: "py-6"
      },

      marginMap: {
        ...baseMap,
        zero: "m-0",
        sm: "m-2",
        md: "m-4",
        lg: "m-6"
      },

      marginXMap: {
        ...baseMap,
        zero: "mx-0",
        sm: "mx-2",
        md: "mx-4",
        lg: "mx-6"
      },

      marginYMap: {
        ...baseMap,
        zero: "my-0",
        sm: "my-2",
        md: "my-4",
        lg: "my-6"
      },

      flexMap: {
        ...baseMap,
        row: "flex",
        col: "flex flex-col"
      },

      flexSpacingMap: {
        ...baseMap,
        "space-between": "justify-between",
        "space-evenly": "justify-evenly",
        "space-around": "justify-around"
      },

      flexWrapMap: {
        ...baseMap,
        wrap: "flex-wrap",
        nowrap: "flex-nowrap"
      },

      flexSizeMap: {
        ...baseMap,
        grow: "flex-grow",
        shrink: "flex-shrink",
        nogrow: "flex-grow-0",
        noshrink: "flex-shrink-0"
      },

      gapMap: {
        ...baseMap,
        sm: "gap-2",
        md: "gap-4",
        lg: "gap-6"
      },

      roundedMap: {
        ...baseMap,
        sm: "rounded",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-3xl"
      },

      placeMap: {
        ...baseMap,
        left: "mr-auto",
        center: "mx-auto",
        right: "ml-auto"
      },

      widthMap: {
        ...baseMap,
        sm: "max-w-sm w-full",
        md: "max-w-lg w-full",
        lg: "max-w-2xl w-full",
        xl: "max-w-4xl w-full",
        "2xl": "max-w-6xl w-full",
        "3xl": "max-w-7xl w-full",
        full: "w-full"
      },

      heightMap: {
        ...baseMap,
        sm: "min-h-[10rem]",
        md: "min-h-[15rem]",
        lg: "min-h-[20rem]",
        screen: "min-h-screen",
        full: "h-full"
      },

      maxHeightMap: {
        ...baseMap,
        sm: "max-h-[10rem]",
        md: "max-h-[15rem]",
        lg: "max-h-[20rem]"
      },

      fontSizeMap: {
        ...baseMap,
        sm: "text-sm",
        md: "text-base",
        lg: "text-xl"
      },

      fontWeightMap: {
        ...baseMap,
        light: "font-light",
        normal: "font-normal",
        bold: "font-semibold"
      },

      bgOpacityMap: {
        ...baseMap,
        light: "bg-opacity-30",
        medium: "bg-opacity-60",
        dark: "bg-opacity-90",
        opaque: "text-opacity-100"
      },

      textOpacityMap: {
        ...baseMap,
        light: "text-gray-200 text-opacity-40",
        medium: "text-gray-200 text-opacity-60",
        dark: "text-gray-200 text-opacity-90",
        opaque: "text-opacity-100"
      },

      borderMap: {
        ...baseMap,
        sm: "border",
        md: "border-2",
        lg: "border-4"
      },

      buttonSizeMap: {
        ...baseMap,
        sm: "max-w-[10rem] w-full",
        md: "max-w-[15rem] w-full",
        lg: "max-w-[20rem] w-full",
        full: "w-full"
      },

      buttonHeightMap: {
        ...baseMap,
        sm: "min-h-[2.63rem]",
        md: "max-w-[2.75rem]",
        lg: "max-w-[2.87rem]"
      },

      displayMap: {
        ...baseMap,
        relative: "relative",
        absolute: "absolute",
        fixed: "fixed",
        sticky: "sticky",
        inline: "inline",
        "inline-block": "inline-block",
        "inline-flex": "inline-flex",
        hidden: "hidden"
      },

      pulseLoaderWidthMap: {
        ...baseMap,
        sm: "max-w-sm",
        md: "max-w-lg",
        lg: "max-w-2xl",
        full: "w-full"
      },

      animateMap: {
        ...baseMap,
        spin: "animate-spin",
        pulse: "animate-pulse"
      }
    };

    return { styleMaps, flexPositionMap };
  }, []);
};
