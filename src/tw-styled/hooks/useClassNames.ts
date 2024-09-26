import { StyleObj } from "../Styles";
import { merge } from "../utils/class-merge";
import { style_maps } from "../utils/style-maps";
import { isType } from "../utils/type-guards";

export const useClassNames = (style: StyleObj) => {
  const styleMaps = style_maps;

  const classNameGenerator = (props: StyleObj) => {
    const result: Record<string, string> = {};

    for (const key in props) {
      if (Object.prototype.hasOwnProperty.call(props, key)) {
        const classNames: string[] = [];
        const styleObject = props[key];

        for (const key in styleObject) {
          const styleKey = key;
          const mapKey = `${key}Map`;

          if (Object.prototype.hasOwnProperty.call(styleObject, styleKey)) {
            if (
              isType<"width">(styleKey, "width") &&
              isType<"widthMap">(mapKey, "widthMap")
            ) {
              const value = styleObject[styleKey];
              const mapValue = styleMaps[mapKey][value || "none"];
              classNames.push(mapValue);
            }
            if (
              isType<"height">(styleKey, "height") &&
              isType<"heightMap">(mapKey, "heightMap")
            ) {
              const value = styleObject[styleKey];
              const mapValue = styleMaps[mapKey][value || "none"];
              classNames.push(mapValue);
            }
            if (
              isType<"maxHeight">(styleKey, "maxHeight") &&
              isType<"maxHeightMap">(mapKey, "maxHeightMap")
            ) {
              const value = styleObject[styleKey];
              const mapValue = styleMaps[mapKey][value || "none"];
              classNames.push(mapValue);
            }
            if (
              isType<"padding">(styleKey, "padding") &&
              isType<"paddingMap">(mapKey, "paddingMap")
            ) {
              const value = styleObject[styleKey];
              const mapValue = styleMaps[mapKey][value || "none"];
              classNames.push(mapValue);
            }
            if (
              isType<"paddingX">(styleKey, "paddingX") &&
              isType<"paddingXMap">(mapKey, "paddingXMap")
            ) {
              const value = styleObject[styleKey];
              const mapValue = styleMaps[mapKey][value || "none"];
              classNames.push(mapValue);
            }
            if (
              isType<"paddingY">(styleKey, "paddingY") &&
              isType<"paddingYMap">(mapKey, "paddingYMap")
            ) {
              const value = styleObject[styleKey];
              const mapValue = styleMaps[mapKey][value || "none"];
              classNames.push(mapValue);
            }
            if (
              isType<"margin">(styleKey, "margin") &&
              isType<"marginMap">(mapKey, "marginMap")
            ) {
              const value = styleObject[styleKey];
              const mapValue = styleMaps[mapKey][value || "none"];
              classNames.push(mapValue);
            }
            if (
              isType<"marginX">(styleKey, "marginX") &&
              isType<"marginXMap">(mapKey, "marginXMap")
            ) {
              const value = styleObject[styleKey];
              const mapValue = styleMaps[mapKey][value || "none"];
              classNames.push(mapValue);
            }
            if (
              isType<"marginY">(styleKey, "marginY") &&
              isType<"marginYMap">(mapKey, "marginYMap")
            ) {
              const value = styleObject[styleKey];
              const mapValue = styleMaps[mapKey][value || "none"];
              classNames.push(mapValue);
            }
            if (
              isType<"place">(styleKey, "place") &&
              isType<"placeMap">(mapKey, "placeMap")
            ) {
              const value = styleObject[styleKey];
              const mapValue = styleMaps[mapKey][value || "none"];
              classNames.push(mapValue);
            }
            if (
              isType<"rounded">(styleKey, "rounded") &&
              isType<"roundedMap">(mapKey, "roundedMap")
            ) {
              const value = styleObject[styleKey];
              const mapValue = styleMaps[mapKey][value || "none"];
              classNames.push(mapValue);
            }
            if (
              isType<"flex">(styleKey, "flex") &&
              isType<"flexMap">(mapKey, "flexMap")
            ) {
              const value = styleObject[styleKey];
              const mapValue = styleMaps[mapKey][value || "none"];
              classNames.push(mapValue);
            }
            if (
              isType<"flexPosition">(styleKey, "flexPosition") &&
              isType<"flexPositionMap">(mapKey, "flexPositionMap")
            ) {
              const value = styleObject[styleKey];
              const mapValue =
                (value && styleMaps[mapKey][styleObject["flex"]!][value]) || "";

              classNames.push(mapValue);
            }
            if (isType<"gap">(styleKey, "gap") && isType<"gapMap">(mapKey, "gapMap")) {
              const value = styleObject[styleKey];
              const mapValue = styleMaps[mapKey][value || "none"];
              classNames.push(mapValue);
            }
            if (isType<"bg">(styleKey, "bg")) {
              const value = styleObject[styleKey];
              if (value) {
                classNames.push(value);
              }
            }
            if (
              isType<"bgOpacity">(styleKey, "bgOpacity") &&
              isType<"bgOpacityMap">(mapKey, "bgOpacityMap")
            ) {
              const value = styleObject[styleKey];
              const mapValue = styleMaps[mapKey][value || "none"];
              classNames.push(mapValue);
            }
            if (
              isType<"textOpacity">(styleKey, "textOpacity") &&
              isType<"textOpacityMap">(mapKey, "textOpacityMap")
            ) {
              const value = styleObject[styleKey];
              const mapValue = styleMaps[mapKey][value || "none"];
              classNames.push(mapValue);
            }

            if (
              isType<"border">(styleKey, "border") &&
              isType<"borderMap">(mapKey, "borderMap")
            ) {
              const value = styleObject[styleKey];
              const mapValue = styleMaps[mapKey][value || "none"];
              classNames.push(mapValue);
            }
            if (
              isType<"fontSize">(styleKey, "fontSize") &&
              isType<"fontSizeMap">(mapKey, "fontSizeMap")
            ) {
              const value = styleObject[styleKey];
              const mapValue = styleMaps[mapKey][value || "none"];
              classNames.push(mapValue);
            }
            if (
              isType<"fontWeight">(styleKey, "fontWeight") &&
              isType<"fontWeightMap">(mapKey, "fontWeightMap")
            ) {
              const value = styleObject[styleKey];
              const mapValue = styleMaps[mapKey][value || "none"];
              classNames.push(mapValue);
            }
            if (
              isType<"buttonSize">(styleKey, "buttonSize") &&
              isType<"buttonSizeMap">(mapKey, "buttonSizeMap")
            ) {
              const value = styleObject[styleKey];
              const mapValue = styleMaps[mapKey][value || "none"];
              classNames.push(mapValue);
            }
            if (
              isType<"buttonHeight">(styleKey, "buttonHeight") &&
              isType<"buttonHeightMap">(mapKey, "buttonHeightMap")
            ) {
              const value = styleObject[styleKey];
              const mapValue = styleMaps[mapKey][value || "none"];
              classNames.push(mapValue);
            }
          }
        }

        result[key] = merge(classNames.join(" "));

        if (result[key]) {
          result[key].concat(styleObject.className || "");
        } else {
          result[key] = styleObject.className || "";
        }
      }
    }

    return result;
  };

  const classes = classNameGenerator(style);

  return classes;
};
