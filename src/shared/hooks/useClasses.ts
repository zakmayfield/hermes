"use client";
import { utilityHooks } from "@/shared/hooks";
import { useMemo } from "react";
import { merge } from "@/utils/ui";
import {
  TLayoutTemplateStyleProps,
  TTextStyleProps,
  TWrapperProps
} from "../components/containers";
import { TBtnStyleProps } from "../components/buttons";
import { InputStyleProps, TFormStyleProps } from "../components/form";
import { SpinLoaderProps } from "../components/loaders";

export const classHooks = {
  useWrapperClasses: (props: TWrapperProps) => {
    const { className, style } = props;
    const styles = utilityHooks.useStyleMap();

    return useMemo(() => {
      return {
        wrapper: merge(`
          ${styles.widthMap[style?.width || "none"]}
          ${styles.heightMap[style?.height || "none"]}
          ${styles.maxHeightMap[style?.maxHeight || "none"]}
          ${styles.paddingMap[style?.padding || "none"]}
          ${styles.paddingXMap[style?.paddingX || "none"]}
          ${styles.paddingYMap[style?.paddingY || "none"]}
          ${styles.marginMap[style?.margin || "none"]}
          ${styles.marginXMap[style?.marginX || "none"]}
          ${styles.marginYMap[style?.marginY || "none"]}
          ${styles.placeMap[style?.place || "none"]}
          ${styles.roundedMap[style?.rounded || "none"]}
          ${styles.flexMap[style?.flex || "none"]}
          ${
            style?.flex &&
            style?.flexPosition &&
            styles.flexPositionMap[style.flex][style.flexPosition]
          }
          ${styles.gapMap[style?.gap || "none"]}
          ${styles.bgOpacityMap[style?.bgOpacity || "none"]}
          ${style?.bg || ""}
          ${styles.borderMap[style?.border || "none"]}
          ${styles.fontSizeMap[style?.fontSize || "none"]}
          ${styles.fontWeightMap[style?.fontWeight || "none"]}
          ${className || ""}
          `)
      };
    }, [className, style]);
  },

  useLayoutTemplateClasses: (props: TLayoutTemplateStyleProps) => {
    const {
      classList: { wrapperClassName, headingClassName, childrenClassName } = {},
      style: { wrapper = {}, heading = {}, children = {} } = {}
    } = props;

    const styles = utilityHooks.useStyleMap();

    return useMemo(() => {
      return {
        wrapper: merge(`
          ${styles.paddingMap[wrapper.padding || "none"]}
          ${styles.marginMap[wrapper.margin || "none"]}
          ${styles.widthMap[wrapper.width || "none"]}
          ${styles.placeMap[wrapper.place || "none"]}
          ${styles.borderMap[wrapper.border || "none"]}
          ${styles.maxHeightMap[wrapper.maxHeight || "none"]}
          ${styles.heightMap[wrapper.height || "none"]}
          ${styles.flexMap[wrapper.flex || "none"]}
          ${styles.gapMap[wrapper.gap || "none"]}
          ${wrapperClassName || ""}
          `),
        heading: merge(`
          ${styles.flexMap[heading.flex || "none"]}
          ${
            (!!heading.flex &&
              !!heading.flexPosition &&
              styles.flexPositionMap[heading.flex][heading.flexPosition]) ||
            "none"
          }
          ${styles.paddingMap[heading.padding || "none"]}
          ${styles.paddingXMap[heading.paddingX || "none"]}
          ${styles.paddingYMap[heading.paddingY || "none"]}
          ${styles.marginMap[heading.margin || "none"]}
          ${styles.widthMap[heading.width || "none"]}
          ${styles.maxHeightMap[heading.maxHeight || "none"]}
          ${styles.heightMap[heading.height || "none"]}
          ${styles.placeMap[heading.place || "none"]}
          ${styles.borderMap[heading.border || "none"]}
          ${headingClassName || ""}
          `),
        children: merge(`
          ${styles.borderMap[children.border || "none"]}
          ${styles.paddingMap[children.padding || "none"]}
          ${styles.marginMap[children.margin || "none"]}
          ${styles.flexMap[children.flex || "none"]}
          ${
            (children.flex &&
              children.flexPosition &&
              styles.flexPositionMap[children.flex][children.flexPosition]) ||
            "none"
          }
          ${styles.gapMap[children.gap || "none"]}
          ${styles.roundedMap[children.rounded || "none"]}
          ${children.bg || ""}
          ${styles.maxHeightMap[children.maxHeight || "none"]}
          ${styles.heightMap[children.height || "none"]}
          ${styles.widthMap[children.width || "none"]}
          ${childrenClassName || ""}
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

  useTextClasses: (props: TTextStyleProps) => {
    const { style, className } = props;
    const styles = utilityHooks.useStyleMap();

    return useMemo(() => {
      return {
        wrapper: merge(`
          ${styles.widthMap[style?.width || "none"]}
          ${styles.paddingMap[style?.padding || "none"]}
          ${styles.marginMap[style?.margin || "none"]}
          ${styles.placeMap[style?.place || "none"]}
          ${className || ""}
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
    const styles = utilityHooks.useStyleMap();

    return useMemo(() => {
      const { formClassName, headingClassName, buttonClassName } = classList || {};
      const { form, heading } = style || {};

      return {
        form: merge(`
          ${styles.paddingMap[form?.padding || "none"]}
          ${styles.widthMap[form?.width || "none"]}
          ${styles.roundedMap[form?.rounded || "none"]}
          ${form?.bg || ""}
          ${formClassName || ""}
          `),
        heading: merge(`
          ${styles.marginYMap[heading?.marginY || "none"]}
          ${headingClassName || ""}
          `),
        button: merge(`
          ${buttonClassName || ""}
          `)
      };
    }, [style, classList]);
  },

  useInputClasses: (props: InputStyleProps) => {
    const { style, classList } = props;
    const { wrapperClassName, labelClassName, inputClassName } = classList || {};
    const { wrapper, label, input } = style || {};

    const styles = utilityHooks.useStyleMap();

    return useMemo(() => {
      return {
        wrapper: merge(`
          ${styles.widthMap[wrapper?.width || "none"]}
          ${styles.heightMap[wrapper?.height || "none"]}
          ${styles.maxHeightMap[wrapper?.maxHeight || "none"]}
          ${styles.paddingMap[wrapper?.padding || "none"]}
          ${styles.paddingXMap[wrapper?.paddingX || "none"]}
          ${styles.paddingYMap[wrapper?.paddingY || "none"]}
          ${styles.marginMap[wrapper?.margin || "none"]}
          ${styles.marginXMap[wrapper?.marginX || "none"]}
          ${styles.marginYMap[wrapper?.marginY || "none"]}
          ${styles.placeMap[wrapper?.place || "none"]}
          ${styles.roundedMap[wrapper?.rounded || "none"]}
          ${styles.flexMap[wrapper?.flex || "none"]}
          ${
            wrapper?.flex &&
            wrapper?.flexPosition &&
            styles.flexPositionMap[wrapper.flex][wrapper.flexPosition]
          }
          ${styles.gapMap[wrapper?.gap || "none"]}
          ${styles.bgOpacityMap[wrapper?.bgOpacity || "none"]}
          ${wrapper?.bg || ""}
          ${styles.borderMap[wrapper?.border || "none"]}
          ${styles.fontSizeMap[wrapper?.fontSize || "none"]}
          ${styles.fontWeightMap[wrapper?.fontWeight || "none"]}
          ${wrapperClassName || ""}
          `),
        label: merge(`
          ${labelClassName || ""}
          `),
        input: merge(`
          ${styles.widthMap[input?.width || "none"]}
          ${styles.heightMap[input?.height || "none"]}
          ${styles.maxHeightMap[input?.maxHeight || "none"]}
          ${styles.paddingMap[input?.padding || "none"]}
          ${styles.paddingXMap[input?.paddingX || "none"]}
          ${styles.paddingYMap[input?.paddingY || "none"]}
          ${styles.marginMap[input?.margin || "none"]}
          ${styles.marginXMap[input?.marginX || "none"]}
          ${styles.marginYMap[input?.marginY || "none"]}
          ${styles.placeMap[input?.place || "none"]}
          ${styles.roundedMap[input?.rounded || "none"]}
          ${styles.flexMap[input?.flex || "none"]}
          ${
            input?.flex &&
            input?.flexPosition &&
            styles.flexPositionMap[input.flex][input.flexPosition]
          }
          ${styles.gapMap[input?.gap || "none"]}
          ${styles.bgOpacityMap[input?.bgOpacity || "none"]}
          ${input?.bg || ""}
          ${styles.borderMap[input?.border || "none"]}
          ${styles.fontSizeMap[input?.fontSize || "none"]}
          ${styles.fontWeightMap[input?.fontWeight || "none"]}
          ${inputClassName || ""}
          `)
      };
    }, [styles, wrapper, label, input, wrapperClassName, labelClassName, inputClassName]);
  }
};
