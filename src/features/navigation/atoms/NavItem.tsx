import Link from "next/link";

type NavItemProps = TNavItem;

export type TNavItem = {
  id: string;
  text: string;
  href: string;
};

export const NavItem = (props: NavItemProps) => {
  const { text, ...rest } = props;
  return <Link {...rest}>{text}</Link>;
};
