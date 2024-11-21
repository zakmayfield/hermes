import { Icon, Text } from "@/ui";
import React from "react";
import SmallLogo from "@/assets/logo-sm.png";
import Image from "next/image";
import Link from "next/link";
import { IconNames, useTooltip } from "@/shared/hooks/ui";
import { $Enums } from "@prisma/client";
import { signOut } from "next-auth/react";

type SidebarNavigationProps = {
  user_email: string;
  role: $Enums.Roles;
};

type NavItem = {
  href: string;
  text: string;
  icon: IconNames;
};

export const SidebarNavigation = (props: SidebarNavigationProps) => {
  const { user_email, role } = props;

  const [isNavExpanded, setIsNavExpanded] = React.useState(true);
  const handleToggleNav = () => setIsNavExpanded(!isNavExpanded);
  const baseSlideAnimation = "transition-all ease-in-out duration-300";

  const coreLinks: NavItem[] = [{ href: "/", text: "Home", icon: "house" }];
  const adminLinks: NavItem[] = [
    {
      href: "#",
      text: "Users",
      icon: "users"
    }
  ];
  const superLinks: NavItem[] = [
    {
      href: "#",
      text: "Admins",
      icon: "lock"
    }
  ];

  const links: Record<$Enums.Roles, NavItem[]> = {
    USER: [...coreLinks],
    ADMIN: [...coreLinks, ...adminLinks],
    SUPER: [...coreLinks, ...adminLinks, ...superLinks]
  };

  return (
    <div
      className={`bg-primary relative flex flex-col gap-md ${baseSlideAnimation} ${
        isNavExpanded ? "p-lg min-w-sm max-w-sm w-full" : "p-sm min-w-3xs max-w-3xs w-ful"
      }`}
    >
      {/* Open/Close Button */}
      <div className="absolute h-full -right-5 flex flex-row items-center">
        <button
          onClick={handleToggleNav}
          className={`${baseSlideAnimation} duration-200 py-md bg-success opacity-50 hover:opacity-100`}
        >
          <Icon
            name="hamburger"
            style={{ className: "-rotate-90" }}
          />
        </button>
      </div>

      {/* LOGO */}
      <div className="bg-secondary rounded-md p-xs max-h-4xs min-h-4xs w-full flex items-center">
        <Image
          priority
          src={SmallLogo}
          alt="Chasers Juice Logo"
          className={`${baseSlideAnimation} w-4xs mx-auto`}
        />
      </div>

      {/* LINKS */}
      <div
        className={`${baseSlideAnimation} bg-secondary rounded-md flex-1 flex flex-col gap-xs h-full p-md border ${
          isNavExpanded ? "items-start" : "items-center"
        }`}
      >
        {links[role].map((item) => {
          return (
            <LinkItem
              key={item.text}
              item={item}
              isNavExpanded={isNavExpanded}
            />
          );
        })}

        <button
          onClick={() => signOut()}
          className={`${baseSlideAnimation} relative w-full rounded-lg flex items-center gap-sm hover:bg-primary/50 mt-auto ${
            isNavExpanded ? "justify-start py-sm px-md w-full" : "justify-center p-sm"
          }`}
        >
          <Icon
            name="signout"
            style={{ fontSize: "2xl" }}
          />
          <p
            className={`${baseSlideAnimation} duration-75 absolute left-14 w-2xs text-left ${
              !isNavExpanded && "opacity-0"
            }`}
          >
            Sign Out
          </p>
        </button>
      </div>

      {/* FOOTER */}
      <div
        className={`bg-secondary rounded-md min-h-4xs p-xs flex items-center ${
          !isNavExpanded && "justify-center"
        }`}
      >
        {user_email}
      </div>
    </div>
  );
};

function LinkItem({ item, isNavExpanded }: { item: NavItem; isNavExpanded: boolean }) {
  const pathname = "/";

  const baseSlideAnimation = "transition-all ease-in-out duration-300";

  const tooltip = useTooltip({
    anchorSelect: `#link-to-${item.text}`,
    content: item.text,
    place: "right",
    offset: 20,
    style: {
      fontSize: "1rem",
      transitionDelay: "500ms",
      transitionDuration: "300ms",
      backgroundColor: "rgb(var(--success))"
    }
  });

  return (
    <Link
      key={item.text}
      href={item.href}
      className={`${baseSlideAnimation} relative w-full flex items-center gap-sm rounded-lg ${
        isNavExpanded ? "justify-start w-full p-sm px-md" : "justify-center p-xs"
      } ${pathname === item.href ? "bg-success" : "hover:bg-primary/70"}`}
    >
      <Icon
        name={item.icon}
        id={`link-to-${item.text}`}
        style={{ fontSize: "2xl" }}
      />
      {tooltip}

      <p
        className={`${baseSlideAnimation} duration-75 absolute left-14 ${
          !isNavExpanded && "opacity-0"
        }`}
      >
        {item.text}
      </p>
    </Link>
  );
}
