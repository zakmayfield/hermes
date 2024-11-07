"use client";
import { useClassNameResolver } from "@/ui";
import { NavbarProps } from "./Navbar.types";

export const Navbar = (props: NavbarProps) => {
  const { children, style } = props;

  const classes = useClassNameResolver({
    nav: { padding: "sm", ...style }
  });

  return <nav className={classes.get("nav")}>{children}</nav>;
};
