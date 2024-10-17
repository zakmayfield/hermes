import { SignOutButton } from "@/features/authentication/atoms";
import { RoleSwitch } from "./RoleSwitch";
import { Box, Navbar } from "@/tw-styled/ui";
import Link from "next/link";

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
        wrapper: {
          paddingY: "md",
          paddingX: "lg",
          backgroundColor: "primary"
        }
      }}
    >
      <Box
        style={{
          wrapper: {
            display: "flex-row",
            flexRowPosition: "center-right",
            // relative position so `RoleSwitch` has an achor
            position: "relative",
            gap: "md",
            maxWidth: "3xl",
            place: "center"
          }
        }}
      >
        {/* ROLE SWITCH */}
        <RoleSwitch />

        {/* NAVBAR */}
        <Navbar style={{ nav: { display: "flex-row", gap: "md" } }}>
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
