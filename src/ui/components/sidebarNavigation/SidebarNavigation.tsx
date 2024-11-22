"use client";
import { Icon } from "@/ui";
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

type LinkItem = {
  text: string;
  icon: IconNames;
  href?: string;
  children?: { href: string; text: string; icon: IconNames }[];
};

const pathname = "foo";
const baseSlideAnimation = "transition-all ease-in-out duration-300";

export const SidebarNavigation = (props: SidebarNavigationProps) => {
  const { user_email, role } = props;

  const [isNavExpanded, setIsNavExpanded] = React.useState(true);
  const handleToggleNav = () => setIsNavExpanded(!isNavExpanded);

  return (
    <div
      className={`bg-primary relative flex flex-col gap-md ${baseSlideAnimation} ${
        isNavExpanded ? "p-lg min-w-sm max-w-sm w-full" : "p-sm min-w-3xs max-w-3xs w-ful"
      }`}
    >
      {/* Open/Close Button */}
      <ToggleExpandButton
        isNavExpanded={isNavExpanded}
        handleToggleNav={handleToggleNav}
      />
      {/* LOGO */}
      <NavigationHeader />
      {/* LINKS */}
      <NavigationLinks
        isNavExpanded={isNavExpanded}
        role={role}
      />
      {/* FOOTER */}
      <NavigationFooter
        isNavExpanded={isNavExpanded}
        user_email={user_email}
      />
    </div>
  );
};

function NavigationLinks({
  isNavExpanded,
  role
}: {
  isNavExpanded: boolean;
  role: $Enums.Roles;
}) {
  const links = getLinks();

  return (
    <div
      className={`${baseSlideAnimation} bg-secondary rounded-md flex-1 flex flex-col gap-xs h-full ${
        isNavExpanded ? "items-start p-md" : "items-center p-xs"
      }`}
    >
      {links[role].map((item) =>
        item.children ? (
          <NestedLinkItem
            key={item.text}
            item={item}
            isNavExpanded={isNavExpanded}
          />
        ) : (
          <BaseLinkItem
            key={item.text}
            item={item}
            isNavExpanded={isNavExpanded}
          />
        )
      )}

      <SignOutButton isNavExpanded={isNavExpanded} />
    </div>
  );
}

const defaultLinkStyles = "rounded-lg p-xs w-full cursor-pointer hover:bg-primary/70";
const defaultIconStyles = "text-2xl min-w-[20px]";
const defaultSmoothAnimation = "transition-all ease-in-out duration-300";

function SignOutButton({ isNavExpanded }: { isNavExpanded: boolean }) {
  const tooltip = useTooltip({
    anchorSelect: `#link-signout`,
    content: "Sign out",
    place: "right"
  });
  return (
    <div
      id="link-signout"
      className={`${defaultSmoothAnimation} ${defaultLinkStyles} relative flex items-center gap-sm mt-auto ${
        isNavExpanded ? "justify-start" : "justify-center"
      }`}
    >
      <Icon
        name="signout"
        style={{ className: `${defaultIconStyles}` }}
      />

      <p className={`${isNavExpanded ? "min-w-4xs" : "hidden"}`}>Sign out</p>

      {!isNavExpanded && tooltip}
    </div>
  );
}

function BaseLinkItem({
  item,
  isNavExpanded
}: {
  item: LinkItem;
  isNavExpanded: boolean;
}) {
  const tooltip = useTooltip({
    anchorSelect: `#link-${item.text}`,
    content: item.text,
    place: "right"
  });

  return (
    <div
      id={`link-${item.text}`}
      className={`${defaultSmoothAnimation} ${defaultLinkStyles} relative flex items-center ${
        isNavExpanded ? "justify-start" : "justify-center"
      } ${pathname === item.href && "bg-success hover:bg-success-light"}`}
    >
      <Link
        href={item.href as string}
        className="flex items-center gap-sm"
      >
        <Icon
          name={item.icon}
          style={{ className: `${defaultIconStyles}` }}
        />

        <p className={`${isNavExpanded ? "" : "hidden"}`}>{item.text}</p>
      </Link>

      {!isNavExpanded && tooltip}
    </div>
  );
}

function NestedLinkItem({
  item,
  isNavExpanded
}: {
  item: LinkItem;
  isNavExpanded: boolean;
}) {
  const [isShowingChildren, setIsShowingChildren] = React.useState(
    () => !!item.children?.find((child) => child.href === pathname)
  );
  const handleToggleChildren = () => setIsShowingChildren(!isShowingChildren);
  const tooltip = useTooltip({
    anchorSelect: `#title-${item.text}`,
    content: item.text,
    place: "right"
  });
  return (
    <div className="w-full flex flex-col">
      <div
        id={`title-${item.text}`}
        onClick={handleToggleChildren}
        className={`${defaultSmoothAnimation} ${defaultLinkStyles} relative flex items-center gap-sm w-full ${
          isNavExpanded ? "justify-start" : "justify-center"
        } ${isShowingChildren && "bg-tertiary/20 rounded-b-none"}`}
      >
        <Icon
          name={item.icon}
          style={{
            className: `${defaultIconStyles}`
          }}
        />

        <p className={`${isNavExpanded ? "" : "hidden"}`}>{item.text}</p>

        <Icon
          name="arrowsUpDown"
          style={{
            className: `opacity-50 hover:opacity-100 absolute ${
              isNavExpanded ? "right-2" : "bottom-0 right-0"
            } ${isShowingChildren && "rotate-180"}`
          }}
        />

        {!isNavExpanded && tooltip}
      </div>

      <div
        className={`${defaultSmoothAnimation} bg-tertiary/20 p-xs rounded-b-lg flex flex-col gap-xs ${
          isNavExpanded && "px-md"
        } ${isShowingChildren ? "min-h-none" : "h-none p-none"}`}
      >
        {isShowingChildren &&
          item.children?.map((child) => (
            <BaseLinkItem
              key={child.text}
              isNavExpanded={isNavExpanded}
              item={child}
            />
          ))}
      </div>
      {/* )} */}
    </div>
  );
}

function ToggleExpandButton({
  isNavExpanded,
  handleToggleNav
}: {
  isNavExpanded: boolean;
  handleToggleNav: () => void;
}) {
  return (
    <div
      className={`absolute h-full flex flex-row items-center ${
        isNavExpanded ? "-right-2" : "-right-5"
      }`}
    >
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
  );
}

function NavigationHeader() {
  return (
    <div className="bg-secondary rounded-md p-xs max-h-4xs min-h-4xs w-full flex items-center">
      <Image
        priority
        src={SmallLogo}
        alt="Chasers Juice Logo"
        className={`${baseSlideAnimation} w-4xs mx-auto`}
      />
    </div>
  );
}

function NavigationFooter({
  isNavExpanded,
  user_email
}: {
  isNavExpanded: boolean;
  user_email: string;
}) {
  return (
    <div
      className={`bg-secondary rounded-md min-h-4xs p-xs flex items-center ${
        !isNavExpanded && "justify-center"
      }`}
    >
      {user_email}
    </div>
  );
}

function getLinks() {
  const coreLinks: LinkItem[] = [
    {
      text: "Home",
      icon: "house",
      href: "#"
    },
    {
      text: "Dashboard",
      icon: "threeCircles",
      href: "#"
    },
    {
      text: "Cart",
      icon: "cart",
      href: "#"
    }
  ];
  const adminLinks: LinkItem[] = [
    ...coreLinks,
    {
      text: "Administrators",
      icon: "clipboard",
      children: [
        {
          text: "Users",
          href: "#",
          icon: "users"
        }
      ]
    }
  ];
  const superLinks: LinkItem[] = [
    ...adminLinks,
    {
      text: "Super",
      icon: "globe",
      children: [
        {
          text: "Admins",
          href: "foo",
          icon: "lock"
        },
        {
          text: "Permissions",
          href: "#",
          icon: "shield"
        }
      ]
    }
  ];

  const links = {
    USER: [...coreLinks],
    ADMIN: [...adminLinks],
    SUPER: [...superLinks]
  };

  return links;
}
