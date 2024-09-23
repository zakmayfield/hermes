import { classHooks } from "@/shared/hooks";
import { IBaseStyles, IFlexStyles, IOtherStyles } from "@/types/Styles";
import { HTMLAttributes } from "react";

export type TTextStyleProps = {
  className?: string;
  style?: IBaseStyles & IFlexStyles & IOtherStyles;
};

type TTextProps = TTextStyleProps &
  HTMLAttributes<HTMLParagraphElement> & {
    children: React.ReactNode;
    as?: "p" | "span";
    described_by?: string;
    is_hidden?: boolean;
  };

export const Text = (props: TTextProps) => {
  const { children, as = "p", described_by, is_hidden } = props;
  const classes = classHooks.useTextClasses({ ...props });

  switch (as) {
    case "p":
      return (
        <p
          aria-describedby={described_by}
          className={classes.wrapper}
          hidden={is_hidden}
        >
          {children}
        </p>
      );
    case "span":
      return (
        <span
          aria-describedby={described_by}
          className={classes.wrapper}
          hidden={is_hidden}
        >
          {children}
        </span>
      );
  }
};
