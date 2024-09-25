import { Wrapper } from "@/tw-styled/components";
import { NavItem, RoleSwitch, TNavItem } from "../molecules";
import { SignOutButton } from "@/features/authentication/atoms/SignOutButton";

export const Nav = () => {
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
    <nav className="p-6 bg-slate-900 relative">
      <RoleSwitch />
      <Wrapper
        style={{
          wrapper: { flex: "row", flexPosition: "center-center", gap: "lg" }
        }}
      >
        {nav_items.map((item) => (
          <NavItem
            key={item.id}
            {...item}
          />
        ))}
        <SignOutButton />
      </Wrapper>
    </nav>
  );
};
