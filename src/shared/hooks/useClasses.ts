import { useMemo } from "react";
import { merge } from "@/utils/ui";
import {
  TContentWrapperStyleProps,
  TFlexStyleProps,
  TLayoutStyleProps,
  TTextStyleProps
} from "../components/containers";
import { TBtnStyleProps } from "../components/buttons";
import { TFormStyleProps } from "../components/form";

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
        green: "bg-green-500",
        red: "bg-red-400",
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
    const { style, className } = props || {};

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
    const { style, className } = props || {};
    const {
      dir = "row",
      gap = "sm",
      padding = "none",
      position = "center"
    } = style || {};

    return useMemo(() => {
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
      const { wrapperClassName, headingClassName, childrenClassName } = classList || {};
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

  useTextClasses: (props: TTextStyleProps) => {
    const { style, className } = props;

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

  useFormClasses: (props: TFormStyleProps) => {
    const { style, classList } = props;

    return useMemo(() => {
      const { formClassName, headingClassName, buttonClassName } = classList || {};
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
  }
};
