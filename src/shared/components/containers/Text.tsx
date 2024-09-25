import { useClassNames } from "@/tw-styled";
import { IStyles } from "@/types/Styles";
import { HTMLAttributes } from "react";

type TTextProps = {
  children: React.ReactNode;
  as?: "p" | "span";
  described_by?: string;
  is_hidden?: boolean;
  className?: string;
  style?: {
    wrapper: IStyles;
  };
  htmlProps?: HTMLAttributes<HTMLParagraphElement>;
};

export const Text = (props: TTextProps) => {
  const { children, as = "p", described_by, is_hidden } = props;
  const classes = useClassNames({ ...props.style });

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
