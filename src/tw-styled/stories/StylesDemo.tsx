import { useState } from "react";
import { useStyleResolver } from "../tools";
import { Btn, Wrapper } from "../ui";
import { BtnVariants, StyleProps } from "../types";

type StylesDemoProps = {};

export const StylesDemo = (props: StylesDemoProps) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const buttonStyles: { textColor: StyleProps["textColor"]; variant: BtnVariants } = {
    textColor: isDisabled ? "disabled" : "none",
    variant: isDisabled ? "ghost-disabled" : "ghost"
  };

  const classes = useStyleResolver({
    button: {
      padding: "sm",
      paddingX: "md",
      rounded: "md",
      buttonVariant: buttonStyles.variant,
      textColor: buttonStyles.textColor
    }
  });

  return (
    <div className="border rounded p-6 space-y-6">
      <div className="space-x-3">
        <button onClick={() => setIsDisabled(!isDisabled)}>
          {isDisabled ? "enable" : "disable"}
        </button>
      </div>

      <div>
        <button
          className={classes.button}
          disabled={isDisabled}
        >
          button
        </button>
      </div>
    </div>
  );
};
