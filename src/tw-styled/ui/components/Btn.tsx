"use client";
import { IconType } from "react-icons";
import { PiSpinnerGap } from "react-icons/pi";
import { BtnVariants, StyleProps } from "@/tw-styled/types";
import { useStyleResolver, useStyles } from "@/tw-styled";

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
    parentWrapper?: StyleProps;
    button?: StyleProps;
    contentWrapper?: StyleProps;
    content?: StyleProps;
    spinner?: StyleProps;
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

  const disabled = isDisabled || isLoading;

  const styles = useStyles({
    key: "btn",
    style,
    options: {
      state: {
        isLoading,
        isDisabled
      },
      btn: {
        variant
      }
    }
  });
  const classes = useStyleResolver({ ...styles });

  return (
    <div className={classes.parentWrapper}>
      <button
        type={type}
        disabled={disabled}
        aria-disabled={disabled}
        className={classes.button}
        onClick={handleClick}
        {...mouseActions}
      >
        {isLoading && (props.style?.button?.width || props.style?.button?.buttonSize) ? (
          <div className={classes.contentWrapper}>
            <PiSpinnerGap className={classes.spinner} />
          </div>
        ) : (
          <div className={classes.contentWrapper}>
            {Icon && <Icon className={classes.content} />}
            {text && <span className={classes.content}>{text}</span>}
          </div>
        )}
      </button>
    </div>
  );
};
