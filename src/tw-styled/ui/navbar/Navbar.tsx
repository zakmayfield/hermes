"use client";
import { useStyleToClass } from "@/tw-styled/style-to-class-resolver";
import { BaseStyles, Children } from "@/tw-styled/types";

type NavbarProps = {
  children?: Children;
  style?: {
    nav?: BaseStyles;
  };
};

export const Navbar = (props: NavbarProps) => {
  const { children, style } = props;

  const styles = {
    nav: { padding: "sm", width: "full", ...style?.nav }
  } satisfies NavbarProps["style"];

  const classes = useStyleToClass(styles);

  return <nav className={classes.get("nav")}>{children}</nav>;
};
