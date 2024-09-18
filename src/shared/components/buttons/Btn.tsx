"use client";
import { useMemo } from "react";
import { IconType } from "react-icons";
import { merge } from "@/utils/ui";
import { ContentWrapper, Text } from "../containers";
import { SpinLoader } from "../loaders";

export type BtnStyleProps = {
  isDisabled?: boolean;
  border?: boolean;
  width?: "sm" | "md" | "lg" | "auto";
  height?: "sm" | "md" | "lg";
  padding?: "sm" | "md" | "lg";
  bgColor?: "green" | "red";
  textColor?: string;
  fontWeight?: "normal" | "bold";
  fontSize?: "sm" | "md" | "lg";
  className?: string;
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
  const { buttonClasses, contentClasses } = useButtonClasses({ ...props });

  return (
    <ContentWrapper width={width || "auto"}>
      <button
        onClick={handleClick}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        className={merge(buttonClasses)}
        {...mouseActions}
      >
        {isLoading && width ? (
          <SpinLoader
            spinnerClassName={merge(
              `${contentClasses} ${
                props.bgColor ? "text-white" : "text-black"
              } text-opacity-100 text-xl`
            )}
          />
        ) : (
          <ContentWrapper flex="row">
            {Icon && (
              <Text
                as="span"
                className={contentClasses}
              >
                <Icon />
              </Text>
            )}
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

export const useButtonClasses = ({
  width,
  height,
  padding,
  border,
  bgColor,
  textColor,
  isDisabled,
  fontWeight,
  fontSize,
  className
}: BtnStyleProps) =>
  useMemo(() => {
    const widthMap = {
      sm: "w-44",
      md: "w-52",
      lg: "w-64",
      auto: "w-auto",
      full: "w-full"
    };
    const heightMap = {
      sm: "h-8",
      md: "h-10",
      lg: "h-12",
      default: "h-10"
    };
    const paddingMap = {
      sm: "p-2",
      md: "p-4",
      lg: "p-6",
      default: "px-4"
    };
    const bgColorMap = {
      green: "bg-green-500",
      red: "bg-red-400",
      default: "bg-none"
    };
    const fontWeightMap = {
      normal: "font-normal",
      bold: "font-semibold",
      default: "font-light"
    };
    const fontSizeMap = {
      sm: "text-sm",
      md: "text-base",
      lg: "text-xl",
      default: "text-base"
    };

    // Button
    const baseClasses = "rounded-md flex items-center justify-center";
    const widthClasses = (width && widthMap[width]) || widthMap.auto;
    const heightClasses = (height && heightMap[height]) || heightMap.default;
    const paddingClasses = (padding && paddingMap[padding]) || paddingMap.default;
    const borderClasses = border && "border";
    const bgColorClasses = (bgColor && bgColorMap[bgColor]) || bgColorMap.default;
    const hoverClasses =
      (!isDisabled && !bgColor && "hover:bg-slate-900") || (!isDisabled && "hover:bg-opacity-90");
    const disabledClasses =
      (isDisabled && bgColor && "bg-opacity-70") || (isDisabled && !bgColor && "bg-slate-50");

    // Content
    const textDisabled = isDisabled && "text-opacity-60";
    // const color = !textColor && bgColor ? "text-white" : textColor ? textColor : "text-black";
    const color = "text-white";
    const textWeight = (fontWeight && fontWeightMap[fontWeight]) || fontWeightMap.default;
    const textSize = (fontSize && fontSizeMap[fontSize]) || fontSizeMap.default;

    return {
      contentClasses: `
        ${textDisabled}
        ${color}
        ${textWeight}
        ${textSize}
      `,
      buttonClasses: `
        ${baseClasses}
        ${widthClasses}
        ${heightClasses}
        ${paddingClasses}
        ${borderClasses}
        ${bgColorClasses}
        ${hoverClasses}
        ${disabledClasses}
        ${className}
      `
    };
  }, [width, height, padding, border, bgColor, isDisabled, fontWeight, fontSize, className]);
