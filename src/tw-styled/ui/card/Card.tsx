"use client";
import { useStyleToClass } from "@/tw-styled/style-to-class-resolver";
import { BaseStyles, Children } from "@/tw-styled/types";

type CardProps = {
  children?: Children;
  options?: {
    title?: string;
  };
  style?: {
    wrapper?: BaseStyles;
    header?: BaseStyles;
    body?: BaseStyles;
  };
};

export const Card = (props: CardProps) => {
  const { style, options: { title = "" } = {}, children } = props;

  const styles = {
    wrapper: {
      borderRadius: "lg",
      padding: "md",
      ...style?.wrapper
    },
    header: { ...style?.header },
    body: { ...style?.body }
  } satisfies CardProps["style"];
  const classes = useStyleToClass(styles);

  return (
    <div className={classes.get("wrapper")}>
      {title && (
        <div className={classes.get("header")}>
          <h5>{title}</h5>
        </div>
      )}

      <div className={classes.get("body")}>{children}</div>
    </div>
  );
};
