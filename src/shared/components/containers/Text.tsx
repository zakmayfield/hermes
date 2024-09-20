import { classHooks } from "@/shared/hooks";
import { HTMLAttributes } from "react";

export type TTextStyleProps = {
  className?: string;
  style?: {
    width?: "auto" | "sm" | "md" | "lg" | "full";
    padding?: "sm" | "md" | "lg";
    margin?: "sm" | "md" | "lg";
    position?: "left" | "center" | "right";
  };
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
