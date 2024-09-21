import Link from "next/link";

type TNavItemProps = TNavItem;

export type TNavItem = {
  id: string;
  text: string;
  href: string;
};

export const NavItem = (props: TNavItemProps) => {
  const { text, ...rest } = props;
  return <Link {...rest}>{text}</Link>;
};
