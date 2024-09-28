"use client";
import { IconType } from "react-icons";
import { BtnVariants, IStyles } from "@/tw-styled/Styles";
import { useClassNames } from "@/tw-styled";
import { styleHooks } from "@/tw-styled/hooks/styleHooks";
import { PiSpinnerGap } from "react-icons/pi";
import { useStyles } from "@/tw-styled/hooks";

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
    parentWrapper?: IStyles;
    button?: IStyles;
    contentWrapper?: IStyles;
    content?: IStyles;
    spinner?: IStyles;
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

  // const styles = useStyles({
  //   key: "btn",
  //   style,
  //   options: {
  //     state: {
  //       isLoading,
  //       isDisabled
  //     },
  //     btn: {
  //       variant
  //     }
  //   }
  // });

  const disabled = isDisabled || isLoading;
  const x = styleHooks.useBtnStyles({ variant, style, disabled });
  const classes = useClassNames({ ...x });

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
