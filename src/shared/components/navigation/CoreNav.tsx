"use client";
import { Box, Icon, Navbar, Text } from "@/ui";
import { Logo } from "../Logo";
import Link from "next/link";
import { $Enums } from "@prisma/client";
import { IconNames } from "@/shared/hooks/ui";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

export const CoreNav = ({ role }: { role: $Enums.Roles }) => {
  return (
    <Box
      style={{
        padding: "sm",
        maxWidth: "sm",
        backgroundColor: "secondary",
        display: "flex-col",
        gap: "md"
      }}
    >
      {/* LOGO */}
      <Logo
        style={{
          wrapper: { place: "center", backgroundColor: "primary", borderRadius: "lg" },
          image: { maxWidth: "2/3", place: "center", className: "pb-md" }
        }}
      />

      {/* LINKS */}
      <Navbar
        style={{
          padding: "xs",
          paddingY: "lg",
          flexSize: "grow",
          backgroundColor: "primary",
          borderRadius: "lg"
        }}
      >
        <NavLinksList role={role} />
      </Navbar>

      {/* LOGIN */}
      <Box
        style={{
          minHeight: "4xs",
          backgroundColor: "primary",
          padding: "xs",
          borderRadius: "lg"
        }}
      >
        <Text>role</Text>
        <Text>test@email.com</Text>
      </Box>
    </Box>
  );
};

function NavLinksList({ role }: { role: $Enums.Roles }) {
  const pathname = usePathname();

  type NavItem = {
    href: string;
    text: string;
    icon: IconNames;
  };

  const coreNavItems: NavItem[] = [
    {
      href: "/",
      text: "Home",
      icon: "house"
    },
    {
      href: "/dashboard",
      text: "Dashboard",
      icon: "threeCircles"
    },
    {
      href: "#",
      text: "Cart",
      icon: "cart"
    }
  ];

  const adminNavItems: NavItem[] = [
    {
      href: "/manage-users",
      text: "Users",
      icon: "users"
    },
    {
      href: "/quickbooks",
      text: "QuickBooks",
      icon: "quickbooks"
    }
  ];

  const superNavItems: NavItem[] = [
    {
      href: "/manage-admins",
      text: "Admins",
      icon: "lock"
    },
    {
      href: "/manage-permissions",
      text: "Permissions",
      icon: "shield"
    }
  ];

  const navLists: Record<$Enums.Roles, NavItem[]> = {
    USER: [...coreNavItems],
    ADMIN: [...coreNavItems, ...adminNavItems],
    SUPER: [...coreNavItems, ...adminNavItems, ...superNavItems]
  };

  return (
    <Box
      style={{
        display: "flex-col",
        gap: "xs",
        position: "relative",
        height: "full"
      }}
    >
      {navLists[role].map((item) => {
        const { icon, href, text } = item;
        return (
          <Link
            key={item.href}
            href={href}
            className={`p-xs px-md flex items-center gap-md rounded-3xl text-xl ${
              pathname === item.href ? "bg-success/50" : "hover:bg-secondary/70"
            }`}
          >
            <Icon name={icon} />

            {text}
          </Link>
        );
      })}

      <button
        onClick={() => signOut()}
        className="p-xs px-md flex items-center gap-md rounded-3xl text-xl hover:bg-secondary/70 cursor-pointer mt-auto"
      >
        <Icon name="signout" />
        <p>Sign Out</p>
      </button>
    </Box>
  );
}
