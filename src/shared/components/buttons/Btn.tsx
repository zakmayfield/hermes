"use client";
import { IconType } from "react-icons";
import { classHooks } from "@/shared/hooks";
import { ContentWrapper, Text } from "../containers";
import { SpinLoader } from "../loaders";

export type TBtnStyleProps = {
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

type TBtnProps = TBtnStyleProps & {
  type?: "button" | "reset" | "submit";
  text?: string;
  handleClick?(): void;
  mouseActions?: {
    onMouseEnter?(): void;
    onMouseLeave?(): void;
  };
};

export const Btn = (props: TBtnProps) => {
  const { type, text, handleClick, mouseActions } = props;
  const { Icon, isLoading, isDisabled, width } = props.style || {};
  const classes = classHooks.useButtonClasses({ ...props });

  return (
    <ContentWrapper className={classes.container}>
      <button
        type={type}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        className={classes.button}
        onClick={handleClick}
        {...mouseActions}
      >
        {isLoading && width ? (
          <SpinLoader
            position="center"
            width="full"
            spinnerClassName={classes.content}
          />
        ) : (
          <ContentWrapper
            style={{
              flex: "row",
              flexCenter: true
            }}
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
