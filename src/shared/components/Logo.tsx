"use client";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { BaseStyles } from "@/tw-styled/types";
import { useStyleToClass } from "@/tw-styled/style-to-class-resolver";

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

  const classes = useStyleToClass(styles);

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
