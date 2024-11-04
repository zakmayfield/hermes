"use client";
import { useStyleToClass } from "@/tw-styled/style-to-class-resolver";
import { NavbarProps } from "./Navbar.types";

export const Navbar = (props: NavbarProps) => {
  const { children, style } = props;

  const classes = useStyleToClass({
    nav: { padding: "sm", ...style }
  });

  return <nav className={classes.get("nav")}>{children}</nav>;
};
