"use client";
import { Icon } from "@/ui";
import React from "react";
import SmallLogo from "@/assets/logo-sm.png";
import Image from "next/image";
import Link from "next/link";
import { IconNames, useTooltip } from "@/shared/hooks/ui";
import { $Enums } from "@prisma/client";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";

type SidebarNavigationProps = {
  role: $Enums.Roles;
};

type LinkItem = {
  text: string;
  icon: IconNames;
  href?: string;
  children?: { href: string; text: string; icon: IconNames }[];
};

const baseSlideAnimation = "transition-all ease-in-out duration-200";

export const SidebarNavigation = (props: SidebarNavigationProps) => {
  const { role } = props;

  const [isNavExpanded, setIsNavExpanded] = React.useState(false);
  const handleToggleNav = () => setIsNavExpanded(!isNavExpanded);

  return (
    <div
      aria-expanded={isNavExpanded}
      className={`bg-primary relative flex flex-col gap-md ${baseSlideAnimation} ${
        isNavExpanded
          ? "p-lg w-full min-w-full md:max-w-sm md:min-w-sm"
          : "p-sm min-w-3xs max-w-3xs w-full"
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
      className={`${baseSlideAnimation} bg-secondary rounded-md flex-1 flex flex-col gap-xs h-full py-xl ${
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

const defaultLinkStyles =
  "rounded-lg p-xs w-full cursor-pointer hover:bg-primary/70 focus:bg-primary/70";
const defaultIconStyles = "text-2xl min-w-[20px]";
const defaultSmoothAnimation = "transition-all ease-in-out duration-200";

function SignOutButton({ isNavExpanded }: { isNavExpanded: boolean }) {
  const tooltip = useTooltip({
    anchorSelect: `#link-signout`,
    content: "Sign out",
    place: "right"
  });
  return (
    <button
      onClick={() => signOut()}
      id="link-signout"
      className={`${defaultSmoothAnimation} ${defaultLinkStyles} relative flex items-center gap-sm mt-auto hover:filter-none ${
        isNavExpanded ? "justify-start" : "justify-center"
      }`}
    >
      <Icon
        name="signout"
        style={{ className: `${defaultIconStyles}` }}
      />

      <p className={`${isNavExpanded ? "min-w-4xs" : "hidden"}`}>Sign out</p>

      {!isNavExpanded && tooltip}
    </button>
  );
}

function BaseLinkItem({
  item,
  isNavExpanded
}: {
  item: LinkItem;
  isNavExpanded: boolean;
}) {
  const pathname = usePathname();
  const tooltip = useTooltip({
    anchorSelect: `#link-${item.text}`,
    content: item.text,
    place: "right"
  });

  return (
    <Link
      aria-label={`link to ${item.text} page`}
      id={`link-${item.text}`}
      href={item.href as string}
      className={`${defaultSmoothAnimation} ${defaultLinkStyles} flex items-center gap-sm w-full ${
        !isNavExpanded && "justify-center"
      } ${
        pathname === item.href &&
        "bg-success hover:bg-success-light focus:bg-success-light"
      }`}
    >
      <div
        className={`relative flex items-center gap-sm ${
          isNavExpanded ? "justify-start" : "justify-center"
        } `}
      >
        <Icon
          name={item.icon}
          style={{ className: `${defaultIconStyles}` }}
        />

        <p className={`${isNavExpanded ? "" : "hidden"}`}>{item.text}</p>
      </div>

      {!isNavExpanded && tooltip}
    </Link>
  );
}

function NestedLinkItem({
  item,
  isNavExpanded
}: {
  item: LinkItem;
  isNavExpanded: boolean;
}) {
  const pathname = usePathname();

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
      <button
        aria-label={`Expand or collapse ${item.text} links`}
        id={`title-${item.text}`}
        onClick={handleToggleChildren}
        className={`${defaultSmoothAnimation} ${defaultLinkStyles} relative flex items-center gap-sm w-full hover:filter-none ${
          isNavExpanded ? "justify-start" : "justify-center"
        } ${isShowingChildren && "bg-tertiary/15 rounded-b-none"}`}
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
      </button>

      <div
        className={`${defaultSmoothAnimation} bg-tertiary/15  rounded-b-lg flex flex-col gap-xs ${
          isNavExpanded && "px-md"
        } ${isShowingChildren ? "min-h-none p-xs" : "h-none p-none"}`}
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
        isNavExpanded ? "right-1" : "-right-5"
      }`}
    >
      <button
        aria-label="expand or collapse navigation"
        onClick={handleToggleNav}
        className={`${baseSlideAnimation} duration-200 py-xl md:py-md bg-success opacity-50 hover:opacity-100 focus:opacity-100`}
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

function getLinks() {
  const userLinks: LinkItem[] = [
    {
      text: "Home",
      href: "/",
      icon: "house"
    },
    {
      text: "Dashboard",
      href: "/dashboard",
      icon: "threeCircles"
    }
  ];

  const adminLinks: LinkItem[] = [
    {
      text: "Management",
      icon: "clipboard",
      children: [
        {
          text: "Customers",
          icon: "users",
          href: "/qb/customer"
        },
        {
          text: "Invoicing",
          icon: "invoice",
          href: "/qb/invoice"
        }
      ]
    }
  ];

  const links2 = {
    CUSTOMER: [...userLinks],
    ADMIN: [...userLinks, ...adminLinks],
    SUPER: [...userLinks, ...adminLinks]
  };

  return links2;
}
