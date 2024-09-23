"use client";
import { useMemo } from "react";
import { merge } from "@/utils/ui";
import {
  TContentWrapperStyleProps,
  TFlexStyleProps,
  TLayoutStyleProps,
  TLayoutTemplateStyleProps,
  TTextStyleProps
} from "../components/containers";
import { TBtnStyleProps } from "../components/buttons";
import { InputStyleProps, TFormStyleProps } from "../components/form";
import { SpinLoaderProps } from "../components/loaders";
import { utilityHooks } from "./useUtilities";

export const classHooks = {
  useButtonClasses: (props: TBtnStyleProps) => {
    const { classList, style } = props;

    return useMemo(() => {
      const {
        containerClassName = "",
        buttonClassName = "",
        contentClassName = ""
      } = classList || {};
      const {
        width = "auto",
        height = "sm",
        padding = "sm",
        fontWeight = "normal",
        fontSize = "md",
        theme = "dark",
        bgColor = "none",
        isDisabled
      } = style || {};

      const widthMap = {
        sm: "w-44",
        md: "w-56",
        lg: "w-72",
        full: "w-full",
        auto: "w-auto"
      };
      const heightMap = {
        sm: "h-10",
        md: "h-12",
        lg: "h-14"
      };
      const paddingMap = {
        sm: "p-2",
        md: "p-4",
        lg: "p-6"
      };
      const bgMap = {
        green: "bg-green-700",
        red: "bg-red-500",
        none: "bg-none"
      };
      const fontWeightMap = {
        normal: "font-normal",
        bold: "font-semibold"
      };
      const fontSizeMap = {
        sm: "text-sm",
        md: "text-base",
        lg: "text-xl"
      };
      const themeMap = {
        light: "text-black",
        dark: "text-white"
      };
      const borderMap = (bgColor === "none" && "border") || "border-none";
      const hoverMap =
        (!isDisabled && bgColor === "none" && "hover:bg-slate-900") ||
        (!isDisabled && "hover:bg-opacity-90");
      const disabledMap =
        (isDisabled && bgColor !== "none" && "bg-opacity-70") ||
        (isDisabled && bgColor === "none" && "bg-slate-500") ||
        "";
      const containerWidthMap = (width === "full" && "w-full") || "";

      return {
        container: merge(`
        ${containerWidthMap}
        ${containerClassName}
      `),
        content: merge(`
        mx-auto
        ${fontWeightMap[fontWeight]}
        ${fontSizeMap[fontSize]}
        ${themeMap[theme]}
        ${disabledMap}
        ${contentClassName}
      `),
        button: merge(`
        rounded-md
        ${borderMap}
        ${paddingMap[padding]}
        ${heightMap[height]}
        ${widthMap[width]}
        ${bgMap[bgColor]}
        ${hoverMap}
        ${disabledMap}
        ${buttonClassName}
      `)
      };
    }, [classList, style]);
  },

  useContentWrapperClasses: (props: TContentWrapperStyleProps) => {
    const { style, className = "" } = props || {};

    return useMemo(() => {
      const {
        width = "none",
        padding = "none",
        paddingX = "none",
        margin = "none",
        flex = "none",
        gap = "md",
        position = "none",
        flexCenter = false,
        rounded = "none"
      } = style || {};

      const widthMap = {
        none: "",
        auto: "w-auto",
        sm: "max-w-sm w-full",
        md: "max-w-lg w-full",
        lg: "max-w-2xl w-full",
        full: "w-full"
      };

      const paddingMap = {
        none: "",
        sm: "p-2",
        md: "p-4",
        lg: "p-6"
      };

      const paddingXMap = {
        none: "",
        sm: "px-2",
        md: "px-4",
        lg: "px-6"
      };

      const marginMap = {
        none: "",
        sm: "m-2",
        md: "m-4",
        lg: "m-6"
      };

      const positionMap = {
        none: "",
        left: "mr-auto",
        center: "mx-auto",
        right: "ml-auto"
      };

      const flexMap = {
        none: "",
        row: "flex gap-3 items-center",
        col: "flex flex-col gap-3"
      };

      const gapMap = {
        sm: "gap-1",
        md: "gap-3",
        lg: "gap-6"
      };

      const roundedMap = {
        none: "rounded-none",
        sm: "rounded",
        md: "rounded-md",
        lg: "rounded-lg"
      };

      const flexCenterMap = flexCenter ? "items-center justify-center" : "";

      return {
        wrapper: merge(`
          ${widthMap[width]}
          ${paddingMap[padding]}
          ${paddingXMap[paddingX]}
          ${marginMap[margin]}
          ${positionMap[position]}
          ${flexMap[flex]}
          ${gapMap[gap]}
          ${flexCenterMap}
          ${roundedMap[rounded]}
          ${className}
          `)
      };
    }, [style, className]);
  },

  useFlexClasses: (props: TFlexStyleProps) => {
    const { style, className = "" } = props || {};

    return useMemo(() => {
      const {
        dir = "row",
        gap = "sm",
        padding = "none",
        position = "center"
      } = style || {};

      const dirMap = {
        row: "flex",
        col: "flex flex-col"
      };

      const gapMap = {
        sm: "gap-2",
        md: "gap-4",
        lg: "gap-6"
      };

      const paddingMap = {
        sm: "p-2",
        md: "p-4",
        lg: "p-6",
        none: "p-0"
      };

      const positionMap = {
        col: {
          left: "items-start justify-start",
          center: "items-center justify-center",
          right: "items-end justify-end"
        },
        row: {
          left: "items-center justify-start",
          center: "items-center justify-center",
          right: "items-center justify-end"
        }
      };

      return {
        wrapper: merge(`
          w-full
          ${dirMap[dir]}
          ${gapMap[gap]}
          ${paddingMap[padding]}
          ${positionMap[dir][position]}
          ${className}
          `)
      };
    }, [style, className]);
  },

  useLayoutClasses: (props: TLayoutStyleProps) => {
    const { classList, style } = props;

    return useMemo(() => {
      const {
        wrapperClassName = "",
        headingClassName = "",
        childrenClassName = ""
      } = classList || {};
      const {
        width = "full",
        padding = "none",
        position = "center",
        childrenPadding = "none",
        childrenFlex = "none",
        childrenRounded = "none"
      } = style || {};

      const widthMap = {
        sm: "max-w-sm w-full",
        md: "max-w-lg w-full",
        lg: "max-w-2xl w-full",
        xl: "max-w-4xl w-full",
        "2xl": "max-w-6xl w-full",
        "3xl": "max-w-7xl w-full",
        full: "w-full"
      };

      const paddingMap = {
        none: "",
        sm: "p-2",
        md: "p-4",
        lg: "p-6"
      };

      const positionMap = {
        left: "mr-auto",
        center: "mx-auto",
        right: "ml-auto"
      };

      const childrenPaddingMap = {
        none: "",
        sm: "p-2",
        md: "p-4",
        lg: "p-6"
      };

      const childrenFlexMap = {
        none: "",
        row: "flex gap-3",
        col: "flex flex-col gap-3"
      };

      const childrenRoundedMap = {
        none: "rounded-none",
        sm: "rounded",
        md: "rounded-md",
        lg: "rounded-lg"
      };

      return {
        wrapper: merge(`
          flex flex-col gap-3 
          ${widthMap[width]}
          ${paddingMap[padding]}
          ${positionMap[position]}
          ${wrapperClassName}
          `),
        heading: merge(`
          ${headingClassName}
          `),
        children: merge(`
          ${childrenPaddingMap[childrenPadding]}
          ${childrenFlexMap[childrenFlex]}
          ${childrenRoundedMap[childrenRounded]}
          ${childrenClassName}
          `)
      };
    }, [style, classList]);
  },

  useLayoutTemplateClasses: (props: TLayoutTemplateStyleProps) => {
    const {
      classList: {
        wrapperClassName = "",
        headingClassName = "",
        childrenClassName = ""
      } = {},
      style: { wrapper = {}, heading = {}, children = {} } = {}
    } = props;

    const styles = utilityHooks.useStyleMap();

    return useMemo(() => {
      const {
        paddingMap,
        paddingXMap,
        paddingYMap,
        marginMap,
        flexMap,
        gapMap,
        flexPositionMap,
        roundedMap,
        placeMap,
        widthMap,
        borderMap,
        heightMap
      } = styles;

      return {
        wrapper: merge(`
          ${paddingMap[wrapper.padding || "none"]}
          ${marginMap[wrapper.margin || "none"]}
          ${widthMap[wrapper.width || "none"]}
          ${placeMap[wrapper.place || "none"]}
          ${borderMap[wrapper.border || "none"]}
          ${heightMap[wrapper.height || "none"]}
          ${wrapperClassName}
          `),
        heading: merge(`
          ${flexMap[heading.flex || "none"]}
          ${
            (!!heading.flex &&
              !!heading.flexPosition &&
              flexPositionMap[heading.flex][heading.flexPosition]) ||
            "none"
          }
          ${paddingMap[heading.padding || "none"]}
          ${paddingXMap[heading.paddingX || "none"]}
          ${paddingYMap[heading.paddingY || "none"]}
          ${marginMap[heading.margin || "none"]}
          ${widthMap[heading.width || "none"]}
          ${placeMap[heading.place || "none"]}
          ${headingClassName}
          `),
        children: merge(`
          ${borderMap[children.border || "none"]}
          ${paddingMap[children.padding || "none"]}
          ${marginMap[children.margin || "none"]}
          ${flexMap[children.flex || "none"]}
          ${
            (children.flex &&
              children.flexPosition &&
              flexPositionMap[children.flex][children.flexPosition]) ||
            "none"
          }
          ${gapMap[children.gap || "none"]}
          ${roundedMap[children.rounded || "none"]}
          ${children.bg || ""}
          ${heightMap[children.height || "none"]}
          w-full
          ${childrenClassName}
          `)
      };
    }, [
      wrapperClassName,
      headingClassName,
      childrenClassName,
      wrapper,
      heading,
      children,
      styles
    ]);
  },

  useTextClasses: (props: TTextStyleProps) => {
    const { style, className = "" } = props;

    return useMemo(() => {
      const {
        width = "none",
        padding = "none",
        margin = "none",
        position = "none"
      } = style || {};

      const widthMap = {
        none: "",
        auto: "w-auto",
        sm: "max-w-sm w-full",
        md: "max-w-lg w-full",
        lg: "max-w-2xl w-full",
        full: "w-full"
      };

      const paddingMap = {
        none: "",
        sm: "p-2",
        md: "p-4",
        lg: "p-6"
      };

      const marginMap = {
        none: "",
        sm: "m-2",
        md: "m-4",
        lg: "m-6"
      };

      const positionMap = {
        none: "",
        left: "mr-auto",
        center: "mx-auto",
        right: "ml-auto"
      };

      return {
        wrapper: merge(`
        ${widthMap[width]}
        ${paddingMap[padding]}
        ${marginMap[margin]}
        ${positionMap[position]}
        ${className}
        `)
      };
    }, [style, className]);
  },

  useSpinLoaderClasses: (props: SpinLoaderProps) => {
    const { style, classList } = props;

    return useMemo(() => {
      const { containerClassName = "", spinnerClassName = "" } = classList || {};
      const {
        size = "md",
        width = "content",
        position = "center",
        padding = "none",
        theme = "light"
      } = style || {};

      const sizeMap = {
        sm: "text-base",
        md: "text-lg",
        lg: "text-2xl"
      };

      const widthMap = {
        content: "max-w-min",
        full: "w-full"
      };

      const positionMap = {
        left: "mr-auto",
        center: "m-auto",
        right: "ml-auto"
      };

      const paddingMap = {
        none: "p-0",
        sm: "p-3",
        md: "p-6",
        lg: "p-9"
      };

      const themeMap = {
        light: "text-gray-800",
        dark: "text-white"
      };

      return {
        wrapper: merge(`
          ${widthMap[width]}
          ${paddingMap[padding]}
          ${containerClassName}
          `),
        icon: merge(`
          animate-spin
          ${sizeMap[size]}
          ${positionMap[position]}
          ${themeMap[theme]}
          ${spinnerClassName}
          `)
      };
    }, [style, classList]);
  },

  useFormClasses: (props: TFormStyleProps) => {
    const { style, classList } = props;

    return useMemo(() => {
      const {
        formClassName = "",
        headingClassName = "",
        buttonClassName = ""
      } = classList || {};
      const { padding = "lg", width = "full" } = style || {};
      const paddingMap = {
        sm: "p-2",
        md: "p-4",
        lg: "p-6",
        none: "p-0"
      };

      const widthMap = {
        sm: "max-w-sm w-full",
        md: "max-w-lg w-full",
        lg: "max-w-2xl w-full",
        full: "w-full"
      };

      return {
        form: merge(`
        ${paddingMap[padding]}
        ${widthMap[width]}
        ${formClassName}
        `),
        heading: merge(`
        mb-6
        ${headingClassName}
        `),
        button: merge(`
        ${buttonClassName}
        `)
      };
    }, [style, classList]);
  },

  useInputClasses: (props: InputStyleProps) => {
    const { style, classList } = props;

    return useMemo(() => {
      const {
        containerClassName = "",
        labelClassName = "",
        inputClassName = ""
      } = classList || {};
      const { width = "full" } = style || {};

      const width_map = {
        content: "",
        full: "w-full"
      };

      return {
        container: merge(`
        ${width_map[width]}
        ${containerClassName}
      `),
        label: merge(`${labelClassName}`),
        input: merge(`
        w-full 
        ${inputClassName}
      `)
      };
    }, [classList, style]);
  }
};
