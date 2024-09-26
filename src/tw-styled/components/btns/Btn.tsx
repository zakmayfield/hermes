"use client";
import { IconType } from "react-icons";
import { BtnVariants, IStyles, StyleObj } from "@/tw-styled/Styles";
import { useClassNames } from "@/tw-styled";
import { Text, Wrapper } from "../wrappers";
import { SpinLoader } from "../loaders";
import { styleHooks } from "@/tw-styled/hooks/styleHooks";

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
  style?: {
    wrapper?: IStyles;
    button?: IStyles;
    loader?: IStyles;
    content?: IStyles;
  };
};

export const Btn = (props: BtnProps) => {
  const {
    type = "button",
    text = "Submit",
    variant = "ghost",
    isLoading = false,
    isDisabled = false,
    Icon,
    handleClick,
    mouseActions,
    style
  } = props;

  const variantStyles = styleHooks.useButtonVariant(variant, { isLoading, isDisabled });

  const styles: StyleObj = {
    ...style,
    button: {
      ...variantStyles,
      ...style?.button
    },
    content: {
      textOpacity: variantStyles.textOpacity,
      ...style?.content
    }
  };

  const classes = useClassNames(styles);

  const disabled = isDisabled || isLoading;

  return (
    <Wrapper className={classes.wrapper}>
      <button
        type={type}
        disabled={disabled}
        aria-disabled={disabled}
        className={classes.button}
        onClick={handleClick}
        {...mouseActions}
      >
        {isLoading && (props.style?.button?.width || props.style?.button?.buttonSize) ? (
          <SpinLoader
            style={{
              wrapper: {
                className: classes.loader
              },
              icon: {
                className: classes.content
              }
            }}
          />
        ) : (
          <Wrapper
            style={{
              wrapper: { flex: "row", flexPosition: "center-center", gap: "sm" }
            }}
          >
            {Icon && <Icon className={classes.content} />}
            {text && (
              <Text
                as="span"
                style={{ wrapper: { className: classes.content } }}
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
