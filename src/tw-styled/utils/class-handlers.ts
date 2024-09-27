import { useMemo } from "react";
import { IStyles } from "../Styles";
import { isType } from "./type-guards";
import { useStyleMaps } from "./style-maps";

export const useClassHandlers = () => {
  const styleMaps = useStyleMaps();

  const classHandlers: Record<
    keyof IStyles,
    (styleObject: IStyles, mapKey: string, styleKey: keyof IStyles) => string
  > = useMemo(() => {
    return {
      width: (styleObject, mapKey, styleKey) => {
        if (
          isType<"width">(styleKey, "width") &&
          isType<"widthMap">(mapKey, "widthMap")
        ) {
          const value = styleObject[styleKey];
          const mapValue = styleMaps[mapKey][value || "none"];
          return mapValue;
        }

        return "";
      },
      height: (styleObject, mapKey, styleKey) => {
        if (
          isType<"height">(styleKey, "height") &&
          isType<"heightMap">(mapKey, "heightMap")
        ) {
          const value = styleObject[styleKey];
          const mapValue = styleMaps[mapKey][value || "none"];
          return mapValue;
        }

        return "";
      },
      maxHeight: (styleObject, mapKey, styleKey) => {
        if (
          isType<"maxHeight">(styleKey, "maxHeight") &&
          isType<"maxHeightMap">(mapKey, "maxHeightMap")
        ) {
          const value = styleObject[styleKey];
          const mapValue = styleMaps[mapKey][value || "none"];
          return mapValue;
        }

        return "";
      },
      padding: (styleObject, mapKey, styleKey) => {
        if (
          isType<"padding">(styleKey, "padding") &&
          isType<"paddingMap">(mapKey, "paddingMap")
        ) {
          const value = styleObject[styleKey];
          const mapValue = styleMaps[mapKey][value || "none"];
          return mapValue;
        }

        return "";
      },
      paddingX: (styleObject, mapKey, styleKey) => {
        if (
          isType<"paddingX">(styleKey, "paddingX") &&
          isType<"paddingXMap">(mapKey, "paddingXMap")
        ) {
          const value = styleObject[styleKey];
          const mapValue = styleMaps[mapKey][value || "none"];
          return mapValue;
        }

        return "";
      },
      paddingY: (styleObject, mapKey, styleKey) => {
        if (
          isType<"paddingY">(styleKey, "paddingY") &&
          isType<"paddingYMap">(mapKey, "paddingYMap")
        ) {
          const value = styleObject[styleKey];
          const mapValue = styleMaps[mapKey][value || "none"];
          return mapValue;
        }

        return "";
      },
      margin: (styleObject, mapKey, styleKey) => {
        if (
          isType<"margin">(styleKey, "margin") &&
          isType<"marginMap">(mapKey, "marginMap")
        ) {
          const value = styleObject[styleKey];
          const mapValue = styleMaps[mapKey][value || "none"];
          return mapValue;
        }

        return "";
      },
      marginY: (styleObject, mapKey, styleKey) => {
        if (
          isType<"marginY">(styleKey, "marginY") &&
          isType<"marginYMap">(mapKey, "marginYMap")
        ) {
          const value = styleObject[styleKey];
          const mapValue = styleMaps[mapKey][value || "none"];
          return mapValue;
        }

        return "";
      },
      marginX: (styleObject, mapKey, styleKey) => {
        if (
          isType<"marginX">(styleKey, "marginX") &&
          isType<"marginXMap">(mapKey, "marginXMap")
        ) {
          const value = styleObject[styleKey];
          const mapValue = styleMaps[mapKey][value || "none"];
          return mapValue;
        }

        return "";
      },
      place: (styleObject, mapKey, styleKey) => {
        if (
          isType<"place">(styleKey, "place") &&
          isType<"placeMap">(mapKey, "placeMap")
        ) {
          const value = styleObject[styleKey];
          const mapValue = styleMaps[mapKey][value || "none"];
          return mapValue;
        }

        return "";
      },
      rounded: (styleObject, mapKey, styleKey) => {
        if (
          isType<"rounded">(styleKey, "rounded") &&
          isType<"roundedMap">(mapKey, "roundedMap")
        ) {
          const value = styleObject[styleKey];
          const mapValue = styleMaps[mapKey][value || "none"];
          return mapValue;
        }

        return "";
      },
      flex: (styleObject, mapKey, styleKey) => {
        if (isType<"flex">(styleKey, "flex") && isType<"flexMap">(mapKey, "flexMap")) {
          const value = styleObject[styleKey];
          const mapValue = styleMaps[mapKey][value || "none"];
          return mapValue;
        }

        return "";
      },
      flexPosition: (styleObject, mapKey, styleKey) => {
        if (
          isType<"flexPosition">(styleKey, "flexPosition") &&
          isType<"flexPositionMap">(mapKey, "flexPositionMap")
        ) {
          const value = styleObject[styleKey];
          const mapValue =
            (value && styleMaps[mapKey][styleObject["flex"]!][value]) || "";
          return mapValue;
        }

        return "";
      },
      flexSpacing: (styleObject, mapKey, styleKey) => {
        if (
          isType<"flexSpacing">(styleKey, "flexSpacing") &&
          isType<"flexSpacingMap">(mapKey, "flexSpacingMap")
        ) {
          const value = styleObject[styleKey];
          const mapValue = styleMaps[mapKey][value || "none"];
          return mapValue;
        }

        return "";
      },
      flexWrap: (styleObject, mapKey, styleKey) => {
        if (
          isType<"flexWrap">(styleKey, "flexWrap") &&
          isType<"flexWrapMap">(mapKey, "flexWrapMap")
        ) {
          const value = styleObject[styleKey];
          const mapValue = styleMaps[mapKey][value || "none"];
          return mapValue;
        }

        return "";
      },
      flexSize: (styleObject, mapKey, styleKey) => {
        if (
          isType<"flexSize">(styleKey, "flexSize") &&
          isType<"flexSizeMap">(mapKey, "flexSizeMap")
        ) {
          const value = styleObject[styleKey];
          const mapValue = styleMaps[mapKey][value || "none"];
          return mapValue;
        }

        return "";
      },
      gap: (styleObject, mapKey, styleKey) => {
        if (isType<"gap">(styleKey, "gap") && isType<"gapMap">(mapKey, "gapMap")) {
          const value = styleObject[styleKey];
          const mapValue = styleMaps[mapKey][value || "none"];
          return mapValue;
        }

        return "";
      },
      bg: (styleObject, mapKey, styleKey) => {
        if (isType<"bg">(styleKey, "bg") && isType<"bgMap">(mapKey, "bgMap")) {
          const value = styleObject[styleKey] || "";
          return value;
        }

        return "";
      },
      bgOpacity: (styleObject, mapKey, styleKey) => {
        if (
          isType<"bgOpacity">(styleKey, "bgOpacity") &&
          isType<"bgOpacityMap">(mapKey, "bgOpacityMap")
        ) {
          const value = styleObject[styleKey];
          const mapValue = styleMaps[mapKey][value || "none"];
          return mapValue;
        }

        return "";
      },
      textOpacity: (styleObject, mapKey, styleKey) => {
        if (
          isType<"textOpacity">(styleKey, "textOpacity") &&
          isType<"textOpacityMap">(mapKey, "textOpacityMap")
        ) {
          const value = styleObject[styleKey];
          const mapValue = styleMaps[mapKey][value || "none"];
          return mapValue;
        }

        return "";
      },
      border: (styleObject, mapKey, styleKey) => {
        if (
          isType<"border">(styleKey, "border") &&
          isType<"borderMap">(mapKey, "borderMap")
        ) {
          const value = styleObject[styleKey];
          const mapValue = styleMaps[mapKey][value || "none"];
          return mapValue;
        }

        return "";
      },
      fontSize: (styleObject, mapKey, styleKey) => {
        if (
          isType<"fontSize">(styleKey, "fontSize") &&
          isType<"fontSizeMap">(mapKey, "fontSizeMap")
        ) {
          const value = styleObject[styleKey];
          const mapValue = styleMaps[mapKey][value || "none"];
          return mapValue;
        }

        return "";
      },
      fontWeight: (styleObject, mapKey, styleKey) => {
        if (
          isType<"fontWeight">(styleKey, "fontWeight") &&
          isType<"fontWeightMap">(mapKey, "fontWeightMap")
        ) {
          const value = styleObject[styleKey];
          const mapValue = styleMaps[mapKey][value || "none"];
          return mapValue;
        }

        return "";
      },
      buttonSize: (styleObject, mapKey, styleKey) => {
        if (
          isType<"buttonSize">(styleKey, "buttonSize") &&
          isType<"buttonSizeMap">(mapKey, "buttonSizeMap")
        ) {
          const value = styleObject[styleKey];
          const mapValue = styleMaps[mapKey][value || "none"];
          return mapValue;
        }

        return "";
      },
      buttonHeight: (styleObject, mapKey, styleKey) => {
        if (
          isType<"buttonHeight">(styleKey, "buttonHeight") &&
          isType<"buttonHeightMap">(mapKey, "buttonHeightMap")
        ) {
          const value = styleObject[styleKey];
          const mapValue = styleMaps[mapKey][value || "none"];
          return mapValue;
        }

        return "";
      },
      display: (styleObject, mapKey, styleKey) => {
        if (
          isType<"display">(styleKey, "display") &&
          isType<"displayMap">(mapKey, "displayMap")
        ) {
          const value = styleObject[styleKey];
          const mapValue = styleMaps[mapKey][value || "none"];
          return mapValue;
        }

        return "";
      },
      pulseLoaderWidth: (styleObject, mapKey, styleKey) => {
        if (
          isType<"pulseLoaderWidth">(styleKey, "pulseLoaderWidth") &&
          isType<"pulseLoaderWidthMap">(mapKey, "pulseLoaderWidthMap")
        ) {
          const value = styleObject[styleKey];
          const mapValue = styleMaps[mapKey][value || "none"];
          return mapValue;
        }

        return "";
      },
      animate: (styleObject, mapKey, styleKey) => {
        if (
          isType<"animate">(styleKey, "animate") &&
          isType<"animateMap">(mapKey, "animateMap")
        ) {
          const value = styleObject[styleKey];
          const mapValue = styleMaps[mapKey][value || "none"];
          return mapValue;
        }

        return "";
      },
      className: (styleObject, mapKey, styleKey) => {
        if (isType<"className">(styleKey, "className")) {
          const value = styleObject[styleKey] || "";
          return value;
        }
        return "";
      }
    };
  }, [styleMaps]);

  return classHandlers;
};
