"use client";
import { useMemo } from "react";
import { IconType } from "react-icons";
import { merge } from "@/utils/ui";
import { ContentWrapper, Text } from "../containers";
import { SpinLoader } from "../loaders";

export type BtnStyleProps = {
  buttonClassName?: string;
  containerClassName?: string;
  contentClassName?: string;
  isDisabled?: boolean;
  width?: "sm" | "md" | "lg" | "full";
  height?: "sm" | "md" | "lg";
  padding?: "sm" | "md" | "lg";
  bgColor?: "green" | "red";
  fontWeight?: "normal" | "bold";
  fontSize?: "sm" | "md" | "lg";
  theme?: "light" | "dark";
};

type BtnProps = BtnStyleProps & {
  type?: "button" | "reset" | "submit";
  text?: string;
  isLoading?: boolean;
  Icon?: IconType;
  handleClick?(): void;
  mouseActions?: {
    onMouseEnter?(): void;
    onMouseLeave?(): void;
  };
};

export const Btn = (props: BtnProps) => {
  const { text, isDisabled, isLoading, width, Icon, handleClick, mouseActions } = props;
  const { containerClasses, buttonClasses, contentClasses } = useButtonClasses({ ...props });

  return (
    <ContentWrapper className={merge(containerClasses)}>
      <button
        onClick={handleClick}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        className={merge(buttonClasses)}
        {...mouseActions}
      >
        {isLoading && width ? (
          <SpinLoader
            position="center"
            width="full"
            spinnerClassName={merge(`${contentClasses}`)}
          />
        ) : (
          <ContentWrapper
            flex="row"
            flexCenter={true}
          >
            {Icon && <Icon className={contentClasses} />}
            {text && (
              <Text
                as="span"
                className={contentClasses}
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
  const {
    buttonClassName,
    containerClassName,
    contentClassName,
    width = "auto",
    height = "sm",
    padding = "sm",
    fontWeight = "normal",
    fontSize = "md",
    theme = "dark",
    bgColor = "none",
    isDisabled
  } = props;

  return useMemo(() => {
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
      containerClasses: `
        ${containerWidthMap}
        ${containerClassName}
      `,
      contentClasses: `
        mx-auto
        ${fontWeightMap[fontWeight]}
        ${fontSizeMap[fontSize]}
        ${themeMap[theme]}
        ${disabledMap}
        ${contentClassName}
      `,
      buttonClasses: `
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
  }, [
    buttonClassName,
    containerClassName,
    contentClassName,
    width,
    height,
    padding,
    fontWeight,
    fontSize,
    bgColor,
    isDisabled
  ]);
};
