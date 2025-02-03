"use client";
import Image from "next/image";
import logo from "@/assets/logo.png";

export const Logo = (props: {
  classNames?: {
    container?: string;
    image?: string;
  };
}) => {
  const { classNames } = props;
  return (
    <div className={classNames?.container}>
      <Image
        src={logo}
        alt="Chasers Juice Logo"
        priority
        className={classNames?.image}
      />
    </div>
  );
};
