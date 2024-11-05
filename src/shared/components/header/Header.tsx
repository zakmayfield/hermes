import { SignOutButton } from "@/features/authentication/atoms";
import { RoleSwitch } from "./RoleSwitch";
import Link from "next/link";
import { Box, Navbar } from "@/ui/components";

const navbarItems = [
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

export const Header = () => {
  return (
    <Box
      style={{
        paddingY: "md",
        paddingX: "lg",
        backgroundColor: "primary"
      }}
    >
      <Box
        style={{
          // relative position so `RoleSwitch` has an achor
          position: "relative",
          display: "flex-row",
          flexRowPosition: "center-right",
          gap: "md",
          maxWidth: "3xl",
          place: "center"
        }}
      >
        {/* ROLE SWITCH */}
        <RoleSwitch />

        {/* NAVBAR */}
        <Navbar style={{ display: "flex-row", gap: "md" }}>
          {navbarItems.map((item) => (
            <Link
              href={item.href}
              key={item.id}
            >
              {item.text}
            </Link>
          ))}
        </Navbar>

        {/* SIGN OUT BUTTON */}
        <SignOutButton />
      </Box>
    </Box>
  );
};
