"use client";
import { RefAttributes, useState } from "react";
import { toast } from "react-toastify";
import { ITooltip, TooltipRefProps, Tooltip } from "react-tooltip";
import { FaChevronDown } from "react-icons/fa";
import { Text, Wrapper } from "../components/containers";
import { Btn } from "../components/buttons";
import { IStyles } from "@/types/Styles";
import { merge } from "@/utils/ui";

type ToastVariants = "success" | "error" | "warn" | "info";
type TooltipProps = ITooltip & RefAttributes<TooltipRefProps>;

type AccordionProps = {
  data: AccordionItem[];
};
type AccordionItem = {
  id: string;
  title: string;
  body: {
    id: string;
    child: React.ReactNode;
  }[];
};

export const utilityHooks = {
  useToast: () => {
    const notify = (message: string, variant?: ToastVariants) => {
      const defaultVariant = !variant ? "success" : variant;
      return toast[defaultVariant](message);
    };

    return {
      notify
    };
  },

  useTooltip: (props: TooltipProps) => {
    const tt = () => <Tooltip {...props} />;

    return {
      Tooltip: tt
    };
  },

  useAccordion: (props: AccordionProps) => {
    const [expandedId, setExpandedId] = useState<string | null>(null);
    const is_expanded = (id: string) => id === expandedId;
    const handle_expand = (id: string) =>
      is_expanded(id) ? setExpandedId(null) : setExpandedId(id);

    const { data } = props;

    const AccordionItem = (item: AccordionItem) => {
      const { id, title, body } = item;

      return (
        <Wrapper style={{ wrapper: { rounded: "lg", bg: "bg-slate-800" } }}>
          <Wrapper style={{ wrapper: { flex: "row", paddingX: "lg", paddingY: "md" } }}>
            <Text>{title}</Text>
            <Btn
              Icon={FaChevronDown}
              handleClick={() => handle_expand(id)}
              style={{
                button: {
                  buttonHeight: "sm"
                }
              }}
              classList={{
                buttonClassName: (is_expanded(id) && "rotate-180") || ""
              }}
            />
          </Wrapper>

          <Wrapper
            style={{ wrapper: { flex: "col", padding: "lg", gap: "lg" } }}
            className={`${(!is_expanded(id) && "hidden") || ""}`}
          >
            {body.map((item) => (
              <Wrapper
                key={`${item.id}`}
                style={{ wrapper: { width: "full", padding: "sm" } }}
              >
                {item.child}
              </Wrapper>
            ))}
          </Wrapper>
        </Wrapper>
      );
    };

    const Accordion = () => (
      <Wrapper style={{ wrapper: { padding: "lg", flex: "col" } }}>
        {data.map((item) => (
          <AccordionItem
            key={item.id}
            {...item}
          />
        ))}
      </Wrapper>
    );

    return { Accordion, handle_expand, is_expanded };
  },

  useStyleMap: () => {
    const paddingMap = {
      none: "",
      zero: "p-0",
      sm: "p-2",
      md: "p-4",
      lg: "p-6"
    };

    const paddingXMap = {
      none: "",
      zero: "px-0",
      sm: "px-2",
      md: "px-4",
      lg: "px-6"
    };

    const paddingYMap = {
      none: "",
      zero: "py-0",
      sm: "py-2",
      md: "py-4",
      lg: "py-6"
    };

    const marginMap = {
      none: "",
      zero: "m-0",
      sm: "m-2",
      md: "m-4",
      lg: "m-6"
    };

    const marginXMap = {
      none: "",
      zero: "mx-0",
      sm: "mx-2",
      md: "mx-4",
      lg: "mx-6"
    };

    const marginYMap = {
      none: "",
      zero: "my-0",
      sm: "my-2",
      md: "my-4",
      lg: "my-6"
    };

    const flexMap = {
      none: "",
      row: "flex",
      col: "flex flex-col"
    };

    const flexPositionMap = {
      none: "",
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

    const gapMap = {
      none: "",
      sm: "gap-2",
      md: "gap-4",
      lg: "gap-6"
    };

    const roundedMap = {
      none: "",
      sm: "rounded",
      md: "rounded-md",
      lg: "rounded-lg"
    };

    const placeMap = {
      none: "",
      left: "mr-auto",
      center: "mx-auto",
      right: "ml-auto"
    };

    const widthMap = {
      none: "",
      sm: "max-w-sm w-full",
      md: "max-w-lg w-full",
      lg: "max-w-2xl w-full",
      xl: "max-w-4xl w-full",
      "2xl": "max-w-6xl w-full",
      "3xl": "max-w-7xl w-full",
      full: "w-full"
    };

    const heightMap = {
      none: "",
      sm: "min-h-[10rem]",
      md: "min-h-[15rem]",
      lg: "min-h-[20rem]",
      screen: "min-h-screen",
      full: "h-full"
    };

    const buttonHeightMap = {
      none: "",
      sm: "min-h-[2rem]",
      md: "min-h-[2.5rem]",
      lg: "min-h-[3rem]"
    };

    const maxHeightMap = {
      none: "",
      sm: "max-h-[10rem]",
      md: "max-h-[15rem]",
      lg: "max-h-[20rem]"
    };

    const fontSizeMap = {
      none: "",
      sm: "text-sm",
      md: "text-base",
      lg: "text-xl"
    };

    const fontWeightMap = {
      none: "",
      light: "font-light",
      normal: "font-normal",
      bold: "font-semibold"
    };

    const bgOpacityMap = {
      none: "",
      light: "bg-opacity-30",
      medium: "bg-opacity-60",
      dark: "bg-opacity-90"
    };

    const borderMap = {
      none: "",
      sm: "border",
      md: "border-2",
      lg: "border-4"
    };

    return {
      paddingMap,
      paddingXMap,
      paddingYMap,
      marginMap,
      marginXMap,
      marginYMap,
      flexMap,
      gapMap,
      roundedMap,
      placeMap,
      widthMap,
      heightMap,
      buttonHeightMap,
      maxHeightMap,
      flexPositionMap,
      fontSizeMap,
      fontWeightMap,
      bgOpacityMap,
      borderMap
    };
  },

  useClassNames: (style: Record<string, IStyles>) => {
    const styleMaps = utilityHooks.useStyleMap();

    const isType = <T extends string>(key: string, guard: T) => {
      function checkType(key: string, guard: T): key is T {
        return key.includes(guard);
      }

      return checkType(key, guard);
    };

    const classNameGenerator = (props: Record<string, IStyles>) => {
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
              if (
                isType<"bgOpacity">(styleKey, "bgOpacity") &&
                isType<"bgOpacityMap">(mapKey, "bgOpacityMap")
              ) {
                const value = styleObject[styleKey];
                const mapValue = styleMaps[mapKey][value || "none"];
                classNames.push(mapValue);
              }
              if (isType<"bg">(styleKey, "bg")) {
                const value = styleObject[styleKey];
                classNames.push(value || "");
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
            }
          }
          result[key] = merge(classNames.join(" ") || "");
        }
      }

      return result;
    };

    const classes = classNameGenerator(style);

    return classes;
  }
};
