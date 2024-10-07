import Image from "next/image";
import logo from "@/assets/logo.png";

export const Logo = () => {
  return (
    <Image
      src={logo}
      alt="Chasers Juice Logo"
      priority
    />
  );
};
