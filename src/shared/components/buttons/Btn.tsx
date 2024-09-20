"use client";
import { useMemo } from "react";
import { IconType } from "react-icons";
import { merge } from "@/utils/ui";
import { ContentWrapper, Text } from "../containers";
import { SpinLoader } from "../loaders";

export type BtnStyleProps = {
  classList?: {
    containerClassName?: string;
    buttonClassName?: string;
    contentClassName?: string;
  };
  style?: {
    Icon?: IconType;
    isLoading?: boolean;
    isDisabled?: boolean;
    width?: "sm" | "md" | "lg" | "full";
    height?: "sm" | "md" | "lg";
    padding?: "sm" | "md" | "lg";
    bgColor?: "green" | "red";
    fontWeight?: "normal" | "bold";
    fontSize?: "sm" | "md" | "lg";
    theme?: "light" | "dark";
  };
};

type BtnProps = BtnStyleProps & {
  type?: "button" | "reset" | "submit";
  text?: string;
  handleClick?(): void;
  mouseActions?: {
    onMouseEnter?(): void;
    onMouseLeave?(): void;
  };
};

export const Btn = (props: BtnProps) => {
  const { type, text, handleClick, mouseActions } = props;
  const { Icon, isLoading, isDisabled, width } = props.style || {};
  const classes = useButtonClasses({ ...props });

  return (
    <ContentWrapper className={merge(classes.container)}>
      <button
        type={type}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        className={merge(classes.button)}
        onClick={handleClick}
        {...mouseActions}
      >
        {isLoading && width ? (
          <SpinLoader
            position="center"
            width="full"
            spinnerClassName={merge(`${classes.content}`)}
          />
        ) : (
          <ContentWrapper
            flex="row"
            flexCenter={true}
          >
            {Icon && <Icon className={classes.content} />}
            {text && (
              <Text
                as="span"
                className={classes.content}
              >
                {text}
              </Text>
            )}
          </ContentWrapper>
        )}
      </button>
    </ContentWrapper>
  );
};

export const useButtonClasses = (props: BtnStyleProps) => {
  const { classList, style } = props;

  return useMemo(() => {
    const { containerClassName, buttonClassName, contentClassName } = classList || {};
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
      (isDisabled && bgColor === "none" && "bg-slate-500");
    const containerWidthMap = (width === "full" && "w-full") || "";

    return {
      container: `
        ${containerWidthMap}
        ${containerClassName}
      `,
      content: `
        mx-auto
        ${fontWeightMap[fontWeight]}
        ${fontSizeMap[fontSize]}
        ${themeMap[theme]}
        ${disabledMap}
        ${contentClassName}
      `,
      button: `
        rounded-md
        ${borderMap}
        ${paddingMap[padding]}
        ${heightMap[height]}
        ${widthMap[width]}
        ${bgMap[bgColor]}
        ${hoverMap}
        ${disabledMap}
        ${buttonClassName}
      `
    };
  }, [classList, style]);
};
