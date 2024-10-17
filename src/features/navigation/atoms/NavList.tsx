import { Box } from "@/tw-styled/ui";
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
    }
  ];

  return (
    <Box
      as="nav"
      style={{ wrapper: { display: "flex-row", gap: "md" } }}
    >
      {nav_items.map((item) => (
        <NavItem
          key={item.id}
          {...item}
        />
      ))}
    </Box>
  );
};
