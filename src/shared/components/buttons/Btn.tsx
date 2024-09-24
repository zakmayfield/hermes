"use client";
import { IconType } from "react-icons";
import { utilityHooks } from "@/shared/hooks";
import { Text, Wrapper } from "../containers";
import { SpinLoader } from "../loaders";
import { IStyles } from "@/types/Styles";

export type TBtnProps = {
  Icon?: IconType;
  type?: "button" | "reset" | "submit";
  text?: string;
  handleClick?(): void;
  isLoading?: boolean;
  isDisabled?: boolean;
  mouseActions?: {
    onMouseEnter?(): void;
    onMouseLeave?(): void;
  };
  classList?: {
    wrapperClassName?: string;
    buttonClassName?: string;
    loaderClassName?: string;
    contentClassName?: string;
  };
  style?: {
    wrapper?: IStyles;
    button?: IStyles;
    loader?: IStyles;
    content?: IStyles;
  };
};

export const Btn = (props: TBtnProps) => {
  const { type, text, Icon, handleClick, isLoading, isDisabled, mouseActions } = props;
  const classes = utilityHooks.useClassNames({ ...props.style });

  return (
    <Wrapper className={classes.wrapper}>
      <button
        type={type}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        className={classes.button}
        onClick={handleClick}
        {...mouseActions}
      >
        {isLoading && props.style?.button?.width ? (
          <SpinLoader
            classList={{
              containerClassName: classes.loader,
              spinnerClassName: classes.content
            }}
          />
        ) : (
          <Wrapper
            style={{
              wrapper: { flex: "row", flexPosition: "center-center" }
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
          </Wrapper>
        )}
      </button>
    </Wrapper>
  );
};
