import { StyleObj } from "../Styles";
import { merge } from "../utils/class-merge";
import { style_maps } from "../utils/style-maps";
import { isType } from "../utils/type-guards";

export const useClassNames = (style: StyleObj) => {
  const styleMaps = style_maps;

  const classNameGenerator = (props: StyleObj) => {
    const result: Record<string, string> = {};

    // get key from props: props: { wrapper: {...}, content: {...} }
    for (const propsKey in props) {
      if (Object.prototype.hasOwnProperty.call(props, propsKey)) {
        const classNames: string[] = [];
        const styleObject = props[propsKey];

        // get key from style object: { flex: "", width: "" }
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
            if (
              isType<"flexSpacing">(styleKey, "flexSpacing") &&
              isType<"flexSpacingMap">(mapKey, "flexSpacingMap")
            ) {
              const value = styleObject[styleKey];
              const mapValue = styleMaps[mapKey][value || "none"];
              classNames.push(mapValue);
            }
            if (
              isType<"flexWrap">(styleKey, "flexWrap") &&
              isType<"flexWrapMap">(mapKey, "flexWrapMap")
            ) {
              const value = styleObject[styleKey];
              const mapValue = styleMaps[mapKey][value || "none"];
              classNames.push(mapValue);
            }
            if (
              isType<"flexSize">(styleKey, "flexSize") &&
              isType<"flexSizeMap">(mapKey, "flexSizeMap")
            ) {
              const value = styleObject[styleKey];
              const mapValue = styleMaps[mapKey][value || "none"];
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

        // each iteration of propKeys add key to result
        result[propsKey] = "";

        const joinedClassNames = classNames.join(" ");
        const objectClassNames = styleObject.className || "";
        const finalClassNames = joinedClassNames.concat(" ", objectClassNames);

        result[propsKey] = merge(finalClassNames);

        // remove key if no classNames were created
        if (result[propsKey].length === 0) {
          delete result[propsKey];
        }
      }
    }

    return result;
  };

  const classes = classNameGenerator(style);

  return classes;
};
