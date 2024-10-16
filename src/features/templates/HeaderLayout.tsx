"use client";

import { Wrapper } from "@/tw-styled/ui";
import { SignOutButton } from "../authentication/atoms";
import { NavList, RoleSwitch } from "../navigation/atoms";

export const HeaderLayout = () => {
  return (
    <Wrapper
      style={{
        parentWrapper: { padding: "md" },
        childrenWrapper: {
          display: "flex-row",
          flexRowPosition: "center-right",
          // relative position so `RoleSwitch` has an achor
          position: "relative",
          gap: "md",
          width: "3xl",
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
    </Wrapper>
  );
};
