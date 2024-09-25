"use client";
import { useClassNames } from "@/tw-styled";
import { IStyles } from "@/tw-styled/Styles";
import { HTMLAttributes, useEffect } from "react";

type TextProps = {
  children: React.ReactNode;
  as?: "p" | "span";
  described_by?: string;
  is_hidden?: boolean;
  style?: {
    wrapper: IStyles;
  };
  htmlProps?: HTMLAttributes<HTMLParagraphElement>;
};

export const Text = (props: TextProps) => {
  const { children, as = "p", described_by, is_hidden } = props;
  const classes = useClassNames({ ...props.style });

  useEffect(() => {
    console.log("text classes", { classes });
  }, [classes]);

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
