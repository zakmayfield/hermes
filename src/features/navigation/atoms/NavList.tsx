import { NavItem, TNavItem } from "./NavItem";

export const NavList = () => {
  const nav_items: TNavItem[] = [
    {
      id: "1",
      text: "Home",
      href: "/"
    },
    {
      id: "2",
      text: "Dashboard",
      href: "/dashboard"
    },
    {
      id: "3",
      text: "Test Route",
      href: "/test-route"
    }
  ];

  return (
    <nav>
      {nav_items.map((item) => (
        <NavItem
          key={item.id}
          {...item}
        />
      ))}
    </nav>
  );
};
