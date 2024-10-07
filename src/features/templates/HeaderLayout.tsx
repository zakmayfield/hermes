"use client";

import { SignOutButton } from "../authentication/atoms";
import { NavList, RoleSwitch } from "../navigation/atoms";

export const HeaderLayout = () => {
  return (
    <div>
      {/* ROLE SWITCH */}
      <RoleSwitch />

      {/* NAV LIST */}
      <NavList />

      {/* SIGN OUT BUTTON */}
      <SignOutButton />
    </div>
  );
};
