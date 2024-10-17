"use client";

import { Box } from "@/tw-styled/ui";
import { SignOutButton } from "../authentication/atoms";
import { NavList, RoleSwitch } from "../navigation/atoms";

export const HeaderLayout = () => {
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

        {/* NAV LIST */}
        <NavList />

        {/* SIGN OUT BUTTON */}
        <SignOutButton />
      </Box>
    </Box>
  );
};
