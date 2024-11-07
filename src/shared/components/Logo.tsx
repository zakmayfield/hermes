"use client";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { BaseStyles } from "@/ui/types";
import { useClassNameResolver } from "@/ui";

type LogoProps = {
  style?: {
    wrapper?: BaseStyles;
    image?: BaseStyles;
  };
};

export const Logo = (props: LogoProps) => {
  const { style } = props;

  const styles = {
    wrapper: { ...style?.wrapper },
    image: { ...style?.image }
  } satisfies LogoProps["style"];

  const classes = useClassNameResolver(styles);

  return (
    <div className={classes.get("wrapper")}>
      <Image
        src={logo}
        alt="Chasers Juice Logo"
        priority
        className={classes.get("image")}
      />
    </div>
  );
};
