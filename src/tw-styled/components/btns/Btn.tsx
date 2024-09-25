"use client";
import { IconType } from "react-icons";
import { BtnVariants, IStyles, StyleObj } from "@/tw-styled/Styles";
import { useClassNames } from "@/tw-styled";
import { Text, Wrapper } from "../wrappers";
import { SpinLoader } from "../loaders";
import { useButtonVariant } from "@/tw-styled/hooks/useButtonVariant";

export type BtnProps = {
  Icon?: IconType;
  type?: "button" | "reset" | "submit";
  text?: string;
  handleClick?(): void;
  isLoading?: boolean;
  isDisabled?: boolean;
  variant?: BtnVariants;
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

export const Btn = (props: BtnProps) => {
  const {
    type,
    text,
    Icon,
    variant = "ghost",
    handleClick,
    isLoading,
    isDisabled,
    mouseActions,
    style
  } = props;

  const { variantStyles } = useButtonVariant(variant);

  const styles: StyleObj = {
    ...style,
    button: {
      ...variantStyles,
      ...style?.button
    }
  };

  const classes = useClassNames(styles);

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
