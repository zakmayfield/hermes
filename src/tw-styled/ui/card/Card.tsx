"use client";
import { useStyleToClass } from "@/tw-styled/style-to-class-resolver";
import { BaseStyles } from "@/tw-styled/types";

type CardProps = {
  options?: {
    size?: "sm" | "md" | "lg";
  };
  style?: {
    wrapper?: BaseStyles;
  };
};

export const Card = (props: CardProps) => {
  const { style, options: { size = "sm" } = {} } = props;

  const styles = {
    wrapper: { maxWidth: size, spaceY: "sm", ...style?.wrapper }
  } satisfies CardProps["style"];
  const classes = useStyleToClass(styles);

  return (
    <div className={classes.get("wrapper")}>
      <div className="bg-secondary rounded-md min-h-3xs" />
      <div className="p-2">foobar foobaz</div>
    </div>
  );
};
