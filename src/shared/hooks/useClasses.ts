"use client";
import { utilityHooks } from "@/shared/hooks";
import { useMemo } from "react";
import { merge } from "@/utils/ui";
import {
  TLayoutTemplateStyleProps,
  TTextStyleProps,
  TWrapperProps
} from "../components/containers";
import { TBtnProps } from "../components/buttons";
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
        heading: merge(`
          ${styles.widthMap[heading?.width || "none"]}
          ${styles.heightMap[heading?.height || "none"]}
          ${styles.maxHeightMap[heading?.maxHeight || "none"]}
          ${styles.paddingMap[heading?.padding || "none"]}
          ${styles.paddingXMap[heading?.paddingX || "none"]}
          ${styles.paddingYMap[heading?.paddingY || "none"]}
          ${styles.marginMap[heading?.margin || "none"]}
          ${styles.marginXMap[heading?.marginX || "none"]}
          ${styles.marginYMap[heading?.marginY || "none"]}
          ${styles.placeMap[heading?.place || "none"]}
          ${styles.roundedMap[heading?.rounded || "none"]}
          ${styles.flexMap[heading?.flex || "none"]}
          ${
            heading?.flex &&
            heading?.flexPosition &&
            styles.flexPositionMap[heading.flex][heading.flexPosition]
          }
          ${styles.gapMap[heading?.gap || "none"]}
          ${styles.bgOpacityMap[heading?.bgOpacity || "none"]}
          ${heading?.bg || ""}
          ${styles.borderMap[heading?.border || "none"]}
          ${styles.fontSizeMap[heading?.fontSize || "none"]}
          ${styles.fontWeightMap[heading?.fontWeight || "none"]}
          ${headingClassName || ""}
          `),
        children: merge(`
          ${styles.widthMap[children?.width || "none"]}
          ${styles.heightMap[children?.height || "none"]}
          ${styles.maxHeightMap[children?.maxHeight || "none"]}
          ${styles.paddingMap[children?.padding || "none"]}
          ${styles.paddingXMap[children?.paddingX || "none"]}
          ${styles.paddingYMap[children?.paddingY || "none"]}
          ${styles.marginMap[children?.margin || "none"]}
          ${styles.marginXMap[children?.marginX || "none"]}
          ${styles.marginYMap[children?.marginY || "none"]}
          ${styles.placeMap[children?.place || "none"]}
          ${styles.roundedMap[children?.rounded || "none"]}
          ${styles.flexMap[children?.flex || "none"]}
          ${
            children?.flex &&
            children?.flexPosition &&
            styles.flexPositionMap[children.flex][children.flexPosition]
          }
          ${styles.gapMap[children?.gap || "none"]}
          ${styles.bgOpacityMap[children?.bgOpacity || "none"]}
          ${children?.bg || ""}
          ${styles.borderMap[children?.border || "none"]}
          ${styles.fontSizeMap[children?.fontSize || "none"]}
          ${styles.fontWeightMap[children?.fontWeight || "none"]}
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

  useButtonClasses: (props: TBtnProps) => {
    const { classList, style, isDisabled } = props;

    const { wrapperClassName, buttonClassName, loaderClassName, contentClassName } =
      classList || {};
    const { wrapper, button, loader, content } = style || {};

    const styles = utilityHooks.useStyleMap();

    return useMemo(() => {
      const disabledMap =
        (!isDisabled && !button?.bg && "bg-opacity-70") ||
        (!isDisabled && !button?.bg && "bg-slate-500") ||
        "";

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
        content: merge(`
          ${styles.widthMap[content?.width || "none"]}
          ${styles.heightMap[content?.height || "none"]}
          ${styles.maxHeightMap[content?.maxHeight || "none"]}
          ${styles.paddingMap[content?.padding || "none"]}
          ${styles.paddingXMap[content?.paddingX || "none"]}
          ${styles.paddingYMap[content?.paddingY || "none"]}
          ${styles.marginMap[content?.margin || "none"]}
          ${styles.marginXMap[content?.marginX || "none"]}
          ${styles.marginYMap[content?.marginY || "none"]}
          ${styles.placeMap[content?.place || "none"]}
          ${styles.roundedMap[content?.rounded || "none"]}
          ${styles.flexMap[content?.flex || "none"]}
          ${
            content?.flex &&
            content?.flexPosition &&
            styles.flexPositionMap[content.flex][content.flexPosition]
          }
          ${styles.gapMap[content?.gap || "none"]}
          ${styles.bgOpacityMap[content?.bgOpacity || "none"]}
          ${content?.bg || ""}
          ${styles.borderMap[content?.border || "none"]}
          ${styles.fontSizeMap[content?.fontSize || "none"]}
          ${styles.fontWeightMap[content?.fontWeight || "none"]}
          ${disabledMap}
          ${contentClassName}
        `),
        button: merge(`
          ${styles.widthMap[button?.width || "none"]}
          ${styles.buttonHeightMap[button?.buttonHeight || "none"]}
          ${styles.maxHeightMap[button?.maxHeight || "none"]}
          ${styles.paddingMap[button?.padding || "none"]}
          ${styles.paddingXMap[button?.paddingX || "none"]}
          ${styles.paddingYMap[button?.paddingY || "none"]}
          ${styles.marginMap[button?.margin || "none"]}
          ${styles.marginXMap[button?.marginX || "none"]}
          ${styles.marginYMap[button?.marginY || "none"]}
          ${styles.placeMap[button?.place || "none"]}
          ${styles.roundedMap[button?.rounded || "none"]}
          ${styles.flexMap[button?.flex || "none"]}
          ${
            button?.flex &&
            button?.flexPosition &&
            styles.flexPositionMap[button.flex][button.flexPosition]
          }
          ${styles.gapMap[button?.gap || "none"]}
          ${styles.bgOpacityMap[button?.bgOpacity || "none"]}
          ${button?.bg || ""}
          ${styles.borderMap[button?.border || "none"]}
          ${styles.fontSizeMap[button?.fontSize || "none"]}
          ${styles.fontWeightMap[button?.fontWeight || "none"]}
          ${disabledMap}
          ${buttonClassName || ""}
        `),
        loader: merge(`
          ${styles.widthMap[loader?.width || "none"]}
          ${styles.heightMap[loader?.height || "none"]}
          ${styles.maxHeightMap[loader?.maxHeight || "none"]}
          ${styles.paddingMap[loader?.padding || "none"]}
          ${styles.paddingXMap[loader?.paddingX || "none"]}
          ${styles.paddingYMap[loader?.paddingY || "none"]}
          ${styles.marginMap[loader?.margin || "none"]}
          ${styles.marginXMap[loader?.marginX || "none"]}
          ${styles.marginYMap[loader?.marginY || "none"]}
          ${styles.placeMap[loader?.place || "none"]}
          ${styles.roundedMap[loader?.rounded || "none"]}
          ${styles.flexMap[loader?.flex || "none"]}
          ${
            loader?.flex &&
            loader?.flexPosition &&
            styles.flexPositionMap[loader.flex][loader.flexPosition]
          }
          ${styles.gapMap[loader?.gap || "none"]}
          ${styles.bgOpacityMap[loader?.bgOpacity || "none"]}
          ${loader?.bg || ""}
          ${styles.borderMap[loader?.border || "none"]}
          ${styles.fontSizeMap[loader?.fontSize || "none"]}
          ${styles.fontWeightMap[loader?.fontWeight || "none"]}
          ${loaderClassName || ""}
          `)
      };
    }, [
      styles,
      wrapperClassName,
      buttonClassName,
      loaderClassName,
      contentClassName,
      wrapper,
      button,
      loader,
      content
    ]);
  },

  useTextClasses: (props: TTextStyleProps) => {
    const { style, className } = props;
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
      const { form, heading, button } = style || {};

      return {
        form: merge(`
          ${styles.widthMap[form?.width || "none"]}
          ${styles.heightMap[form?.height || "none"]}
          ${styles.maxHeightMap[form?.maxHeight || "none"]}
          ${styles.paddingMap[form?.padding || "none"]}
          ${styles.paddingXMap[form?.paddingX || "none"]}
          ${styles.paddingYMap[form?.paddingY || "none"]}
          ${styles.marginMap[form?.margin || "none"]}
          ${styles.marginXMap[form?.marginX || "none"]}
          ${styles.marginYMap[form?.marginY || "none"]}
          ${styles.placeMap[form?.place || "none"]}
          ${styles.roundedMap[form?.rounded || "none"]}
          ${styles.flexMap[form?.flex || "none"]}
          ${
            form?.flex &&
            form?.flexPosition &&
            styles.flexPositionMap[form.flex][form.flexPosition]
          }
          ${styles.gapMap[form?.gap || "none"]}
          ${styles.bgOpacityMap[form?.bgOpacity || "none"]}
          ${form?.bg || ""}
          ${styles.borderMap[form?.border || "none"]}
          ${styles.fontSizeMap[form?.fontSize || "none"]}
          ${styles.fontWeightMap[form?.fontWeight || "none"]}
          ${formClassName || ""}
          `),
        heading: merge(`
          ${styles.widthMap[heading?.width || "none"]}
          ${styles.heightMap[heading?.height || "none"]}
          ${styles.maxHeightMap[heading?.maxHeight || "none"]}
          ${styles.paddingMap[heading?.padding || "none"]}
          ${styles.paddingXMap[heading?.paddingX || "none"]}
          ${styles.paddingYMap[heading?.paddingY || "none"]}
          ${styles.marginMap[heading?.margin || "none"]}
          ${styles.marginXMap[heading?.marginX || "none"]}
          ${styles.marginYMap[heading?.marginY || "none"]}
          ${styles.placeMap[heading?.place || "none"]}
          ${styles.roundedMap[heading?.rounded || "none"]}
          ${styles.flexMap[heading?.flex || "none"]}
          ${
            heading?.flex &&
            heading?.flexPosition &&
            styles.flexPositionMap[heading.flex][heading.flexPosition]
          }
          ${styles.gapMap[heading?.gap || "none"]}
          ${styles.bgOpacityMap[heading?.bgOpacity || "none"]}
          ${heading?.bg || ""}
          ${styles.borderMap[heading?.border || "none"]}
          ${styles.fontSizeMap[heading?.fontSize || "none"]}
          ${styles.fontWeightMap[heading?.fontWeight || "none"]}
          ${headingClassName || ""}
          `),
        button: merge(`
          ${styles.widthMap[button?.width || "none"]}
          ${styles.heightMap[button?.height || "none"]}
          ${styles.buttonHeightMap[button?.buttonHeight || "none"]}
          ${styles.maxHeightMap[button?.maxHeight || "none"]}
          ${styles.paddingMap[button?.padding || "none"]}
          ${styles.paddingXMap[button?.paddingX || "none"]}
          ${styles.paddingYMap[button?.paddingY || "none"]}
          ${styles.marginMap[button?.margin || "none"]}
          ${styles.marginXMap[button?.marginX || "none"]}
          ${styles.marginYMap[button?.marginY || "none"]}
          ${styles.placeMap[button?.place || "none"]}
          ${styles.roundedMap[button?.rounded || "none"]}
          ${styles.flexMap[button?.flex || "none"]}
          ${
            button?.flex &&
            button?.flexPosition &&
            styles.flexPositionMap[button.flex][button.flexPosition]
          }
          ${styles.gapMap[button?.gap || "none"]}
          ${styles.bgOpacityMap[button?.bgOpacity || "none"]}
          ${button?.bg || ""}
          ${styles.borderMap[button?.border || "none"]}
          ${styles.fontSizeMap[button?.fontSize || "none"]}
          ${styles.fontWeightMap[button?.fontWeight || "none"]}
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
          ${styles.widthMap[label?.width || "none"]}
          ${styles.heightMap[label?.height || "none"]}
          ${styles.maxHeightMap[label?.maxHeight || "none"]}
          ${styles.paddingMap[label?.padding || "none"]}
          ${styles.paddingXMap[label?.paddingX || "none"]}
          ${styles.paddingYMap[label?.paddingY || "none"]}
          ${styles.marginMap[label?.margin || "none"]}
          ${styles.marginXMap[label?.marginX || "none"]}
          ${styles.marginYMap[label?.marginY || "none"]}
          ${styles.placeMap[label?.place || "none"]}
          ${styles.roundedMap[label?.rounded || "none"]}
          ${styles.flexMap[label?.flex || "none"]}
          ${
            label?.flex &&
            label?.flexPosition &&
            styles.flexPositionMap[label.flex][label.flexPosition]
          }
          ${styles.gapMap[label?.gap || "none"]}
          ${styles.bgOpacityMap[label?.bgOpacity || "none"]}
          ${label?.bg || ""}
          ${styles.borderMap[label?.border || "none"]}
          ${styles.fontSizeMap[label?.fontSize || "none"]}
          ${styles.fontWeightMap[label?.fontWeight || "none"]}
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
